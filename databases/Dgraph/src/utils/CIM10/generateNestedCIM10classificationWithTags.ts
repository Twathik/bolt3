import {
  ChapitresCIM10,
  SousChapitresCIM10,
  CategoriesCIM10,
  SousCategoriesCIM10,
} from '../cim10/formatted/cim10ClassificationsFlat'
import {
  filterCondition,
  filterCIM10Data,
  generateEntriesHierarchy,
} from './filterFunctions'
import fs from 'fs'
import {
  cim10FormattedInterface,
  cim10RawInterface,
} from '../interfaces/cim10RawInterface'
import cliProgress from 'cli-progress'

export const generateNestedCIM10classificationWithTags = ({
  data,
}: {
  data: cim10RawInterface[]
}) => {
  console.log('start generating nested cim10 classification')
  const filterData = data.filter((e) => e.code.trim().length === 3)
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  progressBar.start(filterData.length, 0)
  const selectedEntries: cim10RawInterface[] = []
  const write: cim10FormattedInterface[] = Object.keys(ChapitresCIM10).map(
    (chapterKey) => {
      const subChapterArray = Object.entries(SousChapitresCIM10).filter(
        (subChapter) =>
          filterCondition({
            entry: subChapter,
            parentKey: chapterKey,
            type: 'subChapter',
          }),
      )
      if (subChapterArray.length === 0) console.log({ chapterKey })
      return {
        code: chapterKey as keyof typeof ChapitresCIM10,
        label: ChapitresCIM10[chapterKey] as string,
        tags: [],
        subchapters:
          subChapterArray.length > 0
            ? subChapterArray.map(([subChapterKey, subChapterEntry]) => {
                const categoryArray = Object.entries(CategoriesCIM10).filter(
                  (category) =>
                    filterCondition({
                      entry: category,
                      parentKey: subChapterKey,
                      type: 'category',
                    }),
                )

                return {
                  code: subChapterKey,
                  label: subChapterEntry,
                  tags: [],
                  categories:
                    categoryArray.length > 0
                      ? categoryArray.map(([categoryKey, categoryLabel]) => {
                          const subCategoriesArray = Object.entries(
                            SousCategoriesCIM10,
                          ).filter((subCategory) =>
                            filterCondition({
                              entry: subCategory,
                              parentKey: categoryKey,
                              type: 'subCategory',
                            }),
                          )
                          return {
                            code: categoryKey,
                            label: categoryLabel,
                            tags: [],
                            subCategories:
                              subCategoriesArray.length > 0
                                ? subCategoriesArray.map(
                                    ([subCategoryKey, subCategoryLabel]) => ({
                                      code: subCategoryKey,
                                      label: subCategoryLabel,
                                      tags: [],
                                      entries: filterCIM10Data({
                                        data: filterData,
                                        limits: subCategoryKey,
                                        progressBar,
                                        selectedEntries,
                                        forTags: true,
                                      }),
                                    }),
                                  )
                                : [],
                            entries:
                              subCategoriesArray.length === 0
                                ? filterCIM10Data({
                                    data: filterData,
                                    limits: categoryKey,
                                    progressBar,
                                    selectedEntries,
                                    forTags: true,
                                  })
                                : [],
                          }
                        })
                      : [],
                  entries:
                    categoryArray.length === 0
                      ? filterCIM10Data({
                          data: filterData,
                          limits: subChapterKey,
                          progressBar,
                          selectedEntries,
                          forTags: true,
                        })
                      : [],
                }
              })
            : [],
        entries: [],
      }
    },
  )

  fs.writeFileSync(
    './src/cim10/generated/FormattedCim10Classification.Tags.json',
    JSON.stringify(write),
    {
      encoding: 'utf-8',
    },
  )
  progressBar.stop()
  console.log({ dataLength: filterData.length })
  console.log({ selectedLength: selectedEntries.length })
}
