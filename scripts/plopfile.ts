import nodePlop, { ActionType } from 'node-plop'
import shell from 'shelljs'

const plop = nodePlop('plop-templates/plopfile.hbs')

interface Answers {
  componentName: string
  description: string
  destinationDirectory: 'packages' | 'tooling'
}

const camalize = function camalize(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

const capitalize = (str: string) =>
  str.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())

async function createPackage() {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camalize(text))
  })

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
    ],
    actions(answers: any) {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { componentName, description } = answers as Answers

      actions.push({
        type: 'addMany',
        templateFiles: 'component-pkg/**',
        destination: '../src/components/{{dashCase componentName}}',
        base: 'component-pkg/',
        data: { description, componentName },
      })

      return actions
    },
  })

  const { runPrompts, runActions } = plop.getGenerator('component')

  const answers = await runPrompts()
  await runActions(answers)
}

async function run() {
  await createPackage()
  shell.exec('yarn')
}

run()
