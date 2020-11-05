import inquirer from 'inquirer'
import { Choice } from '../types/index.js'

// returns Promise
export const getAttributeInput = (): Promise<{ attribute: Choice }> => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'attribute',
      message: 'Search block by:',
      choices: [Choice.Hash, Choice.BlockNumber]
    }
  ])
}

export const getValueInput = (
  attribute: Choice
): Promise<{ value: string }> => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'value',
      message: `${attribute} value:`,
      validate: (value: string): string | boolean => {
        if (attribute === Choice.Hash) {
          if (value.length !== 66) {
            return 'Hash must be 66 characters long'
          }
        } else {
          if (isNaN(+value)) {
            return 'Not a number'
          }
        }
        return true
      }
    }
  ])
}
