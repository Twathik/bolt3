import { returnInterface } from './CommonInterface'

export interface Formula_example_interface {
  formula: 'example'
  params: {}
}

export interface Formula_example_return_interface extends returnInterface {}

export const Formula_example = ({
  params: {},
}: Formula_example_interface): Formula_example_return_interface => {
  const link = ''
  return {
    link,
  }
}
