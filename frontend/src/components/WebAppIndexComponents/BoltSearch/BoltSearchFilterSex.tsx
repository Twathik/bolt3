import { UseRefinementListProps, useRefinementList } from "react-instantsearch";
import { Checkbox } from "@/components/ui/checkbox";

const CustomFilterBySex = (props: UseRefinementListProps) => {
  const { items, refine } = useRefinementList(props);
  const label = (sex: string) => (sex === "M" ? "Hommes" : "Femmes");
  return (
    <>
      <ul className="flex flex-auto flex-row">
        {items.map((item) => (
          <div className="items-top ml-10 flex space-x-2" key={item.label}>
            <Checkbox
              id={`refine_sex_${item.label}`}
              checked={item.isRefined}
              onCheckedChange={() => refine(item.value)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label(item.label)}
              </label>
              <p className="text-muted-foreground text-sm">
                Nombre total : {item.count}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CustomFilterBySex;
