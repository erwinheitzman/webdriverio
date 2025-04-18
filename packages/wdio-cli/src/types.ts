import type { Options, Reporters } from '@wdio/types'
import type { NormalizedPackageJson } from 'read-pkg-up'
import type { BackendChoice, RegionOptions, ElectronBuildToolChoice, PMs } from './constants.js'

export type PM = typeof PMs[number]

export interface Questionnair {
    runner: string
    preset?: string
    installTestingLibrary?: boolean
    electronAppBinaryPath?: string
    electronBuildTool?: ElectronBuildToolChoice
    electronBuilderConfigPath?: string
    backend?: BackendChoice
    hostname?: string
    port?: string
    path?: string
    expEnvAccessKey?: string
    expEnvHostname?: string
    expEnvPort?: string
    expEnvProtocol?: 'http' | 'https'

    env_user?: string

    env_key?: string
    region?: RegionOptions
    useSauceConnect?: boolean
    framework: string
    specs?: string
    stepDefinitions?: string
    generateTestFiles: boolean
    usePageObjects?: boolean
    pages?: string
    isUsingTypeScript: boolean
    reporters: string[]
    services: string[]
    serenityLibPath?: string
    plugins: string[]
    outputDir?: string
    includeVisualTesting: boolean
    npmInstall: boolean
    createPackageJSON?: boolean
    projectRootCorrect?: boolean
    projectRoot?: string
    e2eEnvironment?: 'web' | 'mobile'
    mobileEnvironment?: 'android' | 'ios'
    browserEnvironment?: ('chrome' | 'firefox' | 'safari' | 'microsoftedge')[]
}

export interface ParsedAnswers extends Omit<Questionnair, 'runner' | 'framework' | 'reporters' | 'services' | 'plugins'> {
    rawAnswers: Questionnair
    runner: 'local' | 'browser'
    projectName: string
    framework: string
    purpose: string
    reporters: string[]
    plugins: string[]
    services: string[]
    packagesToInstall: string[]
    isUsingTypeScript: boolean
    serenityAdapter: string | false
    esmSupport: boolean
    isSync: boolean
    _async: string
    _await: string
    projectRootDir: string
    destSpecRootPath: string
    destPageObjectRootPath: string
    destStepRootPath: string;
    destSerenityLibRootPath: string
    relativePath: string
    hasRootTSConfig: boolean
    tsConfigFilePath: string
    tsProject: string
    wdioConfigPath: string
}

export interface RunCommandArguments {
    coverage?: boolean
    watch?: boolean
    hostname?: string
    port?: number
    path?: string
    user?: string
    key?: string
    logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent'
    bail?: number
    baseUrl?: string
    shard?: Options.ShardOptions
    waitforTimeout?: number
    framework?: string
    reporters?: Reporters.ReporterEntry[]
    suite?: string[]
    spec?: string[]
    exclude?: string[]
    mochaOpts?: WebdriverIO.MochaOpts
    jasmineOpts?: WebdriverIO.JasmineOpts
    cucumberOpts?: WebdriverIO.CucumberOpts
    configPath: string
    updateSnapshots?: Options.Testrunner['updateSnapshots']
    tsConfigPath?: string

    /**
     * @internal
     */
    ignoredWorkerServices?: string[]
}

export interface ReplCommandArguments {
    platformVersion: string
    deviceName: string
    udid: string
    option: string
    capabilities: string
}

export interface InstallCommandArguments {
    config?: string
    type: 'service' | 'reporter' | 'framework' | 'plugin'
    name: string
}

export interface ConfigCommandArguments {
    yarn: boolean
    yes: boolean
    npmTag: string
}

export interface SupportedPackage {
    package: string
    short: string
    purpose: string
}

export interface OnCompleteResult {
    finished: number
    passed: number
    retries: number
    failed: number
}

/** Extracted from @types/lodash@4.14.168 */
export type ValueKeyIteratee<T> =
    | ((value: T, key: string) => NotVoid)
    | IterateeShorthand<T>
type IterateeShorthand<T> =
    | PropertyName
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | [PropertyName, any]
    | PartialShallow<T>
type PropertyName = string | number | symbol
type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P];
}
type NotVoid = unknown

export interface ProjectProps {
    esmSupported: boolean
    path: string
    packageJson: NormalizedPackageJson
}
