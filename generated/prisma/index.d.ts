
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CodeLang
 * 
 */
export type CodeLang = $Result.DefaultSelection<Prisma.$CodeLangPayload>
/**
 * Model TaskType
 * 
 */
export type TaskType = $Result.DefaultSelection<Prisma.$TaskTypePayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model AppType
 * 
 */
export type AppType = $Result.DefaultSelection<Prisma.$AppTypePayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CodeLangs
 * const codeLangs = await prisma.codeLang.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CodeLangs
   * const codeLangs = await prisma.codeLang.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.codeLang`: Exposes CRUD operations for the **CodeLang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeLangs
    * const codeLangs = await prisma.codeLang.findMany()
    * ```
    */
  get codeLang(): Prisma.CodeLangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskType`: Exposes CRUD operations for the **TaskType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTypes
    * const taskTypes = await prisma.taskType.findMany()
    * ```
    */
  get taskType(): Prisma.TaskTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appType`: Exposes CRUD operations for the **AppType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppTypes
    * const appTypes = await prisma.appType.findMany()
    * ```
    */
  get appType(): Prisma.AppTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CodeLang: 'CodeLang',
    TaskType: 'TaskType',
    Workflow: 'Workflow',
    task: 'task',
    AppType: 'AppType',
    Application: 'Application'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "codeLang" | "taskType" | "workflow" | "task" | "appType" | "application"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CodeLang: {
        payload: Prisma.$CodeLangPayload<ExtArgs>
        fields: Prisma.CodeLangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeLangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeLangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          findFirst: {
            args: Prisma.CodeLangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeLangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          findMany: {
            args: Prisma.CodeLangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>[]
          }
          create: {
            args: Prisma.CodeLangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          createMany: {
            args: Prisma.CodeLangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeLangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>[]
          }
          delete: {
            args: Prisma.CodeLangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          update: {
            args: Prisma.CodeLangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          deleteMany: {
            args: Prisma.CodeLangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeLangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeLangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>[]
          }
          upsert: {
            args: Prisma.CodeLangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLangPayload>
          }
          aggregate: {
            args: Prisma.CodeLangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeLang>
          }
          groupBy: {
            args: Prisma.CodeLangGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeLangGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeLangCountArgs<ExtArgs>
            result: $Utils.Optional<CodeLangCountAggregateOutputType> | number
          }
        }
      }
      TaskType: {
        payload: Prisma.$TaskTypePayload<ExtArgs>
        fields: Prisma.TaskTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          findFirst: {
            args: Prisma.TaskTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          findMany: {
            args: Prisma.TaskTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>[]
          }
          create: {
            args: Prisma.TaskTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          createMany: {
            args: Prisma.TaskTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>[]
          }
          delete: {
            args: Prisma.TaskTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          update: {
            args: Prisma.TaskTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          deleteMany: {
            args: Prisma.TaskTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>[]
          }
          upsert: {
            args: Prisma.TaskTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTypePayload>
          }
          aggregate: {
            args: Prisma.TaskTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskType>
          }
          groupBy: {
            args: Prisma.TaskTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTypeCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      AppType: {
        payload: Prisma.$AppTypePayload<ExtArgs>
        fields: Prisma.AppTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          findFirst: {
            args: Prisma.AppTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          findMany: {
            args: Prisma.AppTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>[]
          }
          create: {
            args: Prisma.AppTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          createMany: {
            args: Prisma.AppTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>[]
          }
          delete: {
            args: Prisma.AppTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          update: {
            args: Prisma.AppTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          deleteMany: {
            args: Prisma.AppTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>[]
          }
          upsert: {
            args: Prisma.AppTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppTypePayload>
          }
          aggregate: {
            args: Prisma.AppTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppType>
          }
          groupBy: {
            args: Prisma.AppTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AppTypeCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    codeLang?: CodeLangOmit
    taskType?: TaskTypeOmit
    workflow?: WorkflowOmit
    task?: taskOmit
    appType?: AppTypeOmit
    application?: ApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CodeLangCountOutputType
   */

  export type CodeLangCountOutputType = {
    tasks: number
    applications: number
  }

  export type CodeLangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CodeLangCountOutputTypeCountTasksArgs
    applications?: boolean | CodeLangCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * CodeLangCountOutputType without action
   */
  export type CodeLangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLangCountOutputType
     */
    select?: CodeLangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodeLangCountOutputType without action
   */
  export type CodeLangCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }

  /**
   * CodeLangCountOutputType without action
   */
  export type CodeLangCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type TaskTypeCountOutputType
   */

  export type TaskTypeCountOutputType = {
    tasks: number
  }

  export type TaskTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskTypeCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskTypeCountOutputType without action
   */
  export type TaskTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTypeCountOutputType
     */
    select?: TaskTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskTypeCountOutputType without action
   */
  export type TaskTypeCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    tasks: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | WorkflowCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type AppTypeCountOutputType
   */

  export type AppTypeCountOutputType = {
    applications: number
  }

  export type AppTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | AppTypeCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * AppTypeCountOutputType without action
   */
  export type AppTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTypeCountOutputType
     */
    select?: AppTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppTypeCountOutputType without action
   */
  export type AppTypeCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CodeLang
   */

  export type AggregateCodeLang = {
    _count: CodeLangCountAggregateOutputType | null
    _avg: CodeLangAvgAggregateOutputType | null
    _sum: CodeLangSumAggregateOutputType | null
    _min: CodeLangMinAggregateOutputType | null
    _max: CodeLangMaxAggregateOutputType | null
  }

  export type CodeLangAvgAggregateOutputType = {
    id: number | null
  }

  export type CodeLangSumAggregateOutputType = {
    id: number | null
  }

  export type CodeLangMinAggregateOutputType = {
    id: number | null
    cgname: string | null
    description: string | null
  }

  export type CodeLangMaxAggregateOutputType = {
    id: number | null
    cgname: string | null
    description: string | null
  }

  export type CodeLangCountAggregateOutputType = {
    id: number
    cgname: number
    description: number
    _all: number
  }


  export type CodeLangAvgAggregateInputType = {
    id?: true
  }

  export type CodeLangSumAggregateInputType = {
    id?: true
  }

  export type CodeLangMinAggregateInputType = {
    id?: true
    cgname?: true
    description?: true
  }

  export type CodeLangMaxAggregateInputType = {
    id?: true
    cgname?: true
    description?: true
  }

  export type CodeLangCountAggregateInputType = {
    id?: true
    cgname?: true
    description?: true
    _all?: true
  }

  export type CodeLangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeLang to aggregate.
     */
    where?: CodeLangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLangs to fetch.
     */
    orderBy?: CodeLangOrderByWithRelationInput | CodeLangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeLangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeLangs
    **/
    _count?: true | CodeLangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeLangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeLangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeLangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeLangMaxAggregateInputType
  }

  export type GetCodeLangAggregateType<T extends CodeLangAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeLang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeLang[P]>
      : GetScalarType<T[P], AggregateCodeLang[P]>
  }




  export type CodeLangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeLangWhereInput
    orderBy?: CodeLangOrderByWithAggregationInput | CodeLangOrderByWithAggregationInput[]
    by: CodeLangScalarFieldEnum[] | CodeLangScalarFieldEnum
    having?: CodeLangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeLangCountAggregateInputType | true
    _avg?: CodeLangAvgAggregateInputType
    _sum?: CodeLangSumAggregateInputType
    _min?: CodeLangMinAggregateInputType
    _max?: CodeLangMaxAggregateInputType
  }

  export type CodeLangGroupByOutputType = {
    id: number
    cgname: string
    description: string
    _count: CodeLangCountAggregateOutputType | null
    _avg: CodeLangAvgAggregateOutputType | null
    _sum: CodeLangSumAggregateOutputType | null
    _min: CodeLangMinAggregateOutputType | null
    _max: CodeLangMaxAggregateOutputType | null
  }

  type GetCodeLangGroupByPayload<T extends CodeLangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeLangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeLangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeLangGroupByOutputType[P]>
            : GetScalarType<T[P], CodeLangGroupByOutputType[P]>
        }
      >
    >


  export type CodeLangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cgname?: boolean
    description?: boolean
    tasks?: boolean | CodeLang$tasksArgs<ExtArgs>
    applications?: boolean | CodeLang$applicationsArgs<ExtArgs>
    _count?: boolean | CodeLangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeLang"]>

  export type CodeLangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cgname?: boolean
    description?: boolean
  }, ExtArgs["result"]["codeLang"]>

  export type CodeLangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cgname?: boolean
    description?: boolean
  }, ExtArgs["result"]["codeLang"]>

  export type CodeLangSelectScalar = {
    id?: boolean
    cgname?: boolean
    description?: boolean
  }

  export type CodeLangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cgname" | "description", ExtArgs["result"]["codeLang"]>
  export type CodeLangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CodeLang$tasksArgs<ExtArgs>
    applications?: boolean | CodeLang$applicationsArgs<ExtArgs>
    _count?: boolean | CodeLangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodeLangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CodeLangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CodeLangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeLang"
    objects: {
      tasks: Prisma.$taskPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cgname: string
      description: string
    }, ExtArgs["result"]["codeLang"]>
    composites: {}
  }

  type CodeLangGetPayload<S extends boolean | null | undefined | CodeLangDefaultArgs> = $Result.GetResult<Prisma.$CodeLangPayload, S>

  type CodeLangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeLangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeLangCountAggregateInputType | true
    }

  export interface CodeLangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeLang'], meta: { name: 'CodeLang' } }
    /**
     * Find zero or one CodeLang that matches the filter.
     * @param {CodeLangFindUniqueArgs} args - Arguments to find a CodeLang
     * @example
     * // Get one CodeLang
     * const codeLang = await prisma.codeLang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeLangFindUniqueArgs>(args: SelectSubset<T, CodeLangFindUniqueArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeLang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeLangFindUniqueOrThrowArgs} args - Arguments to find a CodeLang
     * @example
     * // Get one CodeLang
     * const codeLang = await prisma.codeLang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeLangFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeLangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeLang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangFindFirstArgs} args - Arguments to find a CodeLang
     * @example
     * // Get one CodeLang
     * const codeLang = await prisma.codeLang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeLangFindFirstArgs>(args?: SelectSubset<T, CodeLangFindFirstArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeLang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangFindFirstOrThrowArgs} args - Arguments to find a CodeLang
     * @example
     * // Get one CodeLang
     * const codeLang = await prisma.codeLang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeLangFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeLangFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeLangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeLangs
     * const codeLangs = await prisma.codeLang.findMany()
     * 
     * // Get first 10 CodeLangs
     * const codeLangs = await prisma.codeLang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeLangWithIdOnly = await prisma.codeLang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeLangFindManyArgs>(args?: SelectSubset<T, CodeLangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeLang.
     * @param {CodeLangCreateArgs} args - Arguments to create a CodeLang.
     * @example
     * // Create one CodeLang
     * const CodeLang = await prisma.codeLang.create({
     *   data: {
     *     // ... data to create a CodeLang
     *   }
     * })
     * 
     */
    create<T extends CodeLangCreateArgs>(args: SelectSubset<T, CodeLangCreateArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeLangs.
     * @param {CodeLangCreateManyArgs} args - Arguments to create many CodeLangs.
     * @example
     * // Create many CodeLangs
     * const codeLang = await prisma.codeLang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeLangCreateManyArgs>(args?: SelectSubset<T, CodeLangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeLangs and returns the data saved in the database.
     * @param {CodeLangCreateManyAndReturnArgs} args - Arguments to create many CodeLangs.
     * @example
     * // Create many CodeLangs
     * const codeLang = await prisma.codeLang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeLangs and only return the `id`
     * const codeLangWithIdOnly = await prisma.codeLang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeLangCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeLangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeLang.
     * @param {CodeLangDeleteArgs} args - Arguments to delete one CodeLang.
     * @example
     * // Delete one CodeLang
     * const CodeLang = await prisma.codeLang.delete({
     *   where: {
     *     // ... filter to delete one CodeLang
     *   }
     * })
     * 
     */
    delete<T extends CodeLangDeleteArgs>(args: SelectSubset<T, CodeLangDeleteArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeLang.
     * @param {CodeLangUpdateArgs} args - Arguments to update one CodeLang.
     * @example
     * // Update one CodeLang
     * const codeLang = await prisma.codeLang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeLangUpdateArgs>(args: SelectSubset<T, CodeLangUpdateArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeLangs.
     * @param {CodeLangDeleteManyArgs} args - Arguments to filter CodeLangs to delete.
     * @example
     * // Delete a few CodeLangs
     * const { count } = await prisma.codeLang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeLangDeleteManyArgs>(args?: SelectSubset<T, CodeLangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeLangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeLangs
     * const codeLang = await prisma.codeLang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeLangUpdateManyArgs>(args: SelectSubset<T, CodeLangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeLangs and returns the data updated in the database.
     * @param {CodeLangUpdateManyAndReturnArgs} args - Arguments to update many CodeLangs.
     * @example
     * // Update many CodeLangs
     * const codeLang = await prisma.codeLang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeLangs and only return the `id`
     * const codeLangWithIdOnly = await prisma.codeLang.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeLangUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeLangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeLang.
     * @param {CodeLangUpsertArgs} args - Arguments to update or create a CodeLang.
     * @example
     * // Update or create a CodeLang
     * const codeLang = await prisma.codeLang.upsert({
     *   create: {
     *     // ... data to create a CodeLang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeLang we want to update
     *   }
     * })
     */
    upsert<T extends CodeLangUpsertArgs>(args: SelectSubset<T, CodeLangUpsertArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeLangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangCountArgs} args - Arguments to filter CodeLangs to count.
     * @example
     * // Count the number of CodeLangs
     * const count = await prisma.codeLang.count({
     *   where: {
     *     // ... the filter for the CodeLangs we want to count
     *   }
     * })
    **/
    count<T extends CodeLangCountArgs>(
      args?: Subset<T, CodeLangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeLangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeLang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeLangAggregateArgs>(args: Subset<T, CodeLangAggregateArgs>): Prisma.PrismaPromise<GetCodeLangAggregateType<T>>

    /**
     * Group by CodeLang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodeLangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeLangGroupByArgs['orderBy'] }
        : { orderBy?: CodeLangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodeLangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeLangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeLang model
   */
  readonly fields: CodeLangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeLang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeLangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends CodeLang$tasksArgs<ExtArgs> = {}>(args?: Subset<T, CodeLang$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends CodeLang$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, CodeLang$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeLang model
   */
  interface CodeLangFieldRefs {
    readonly id: FieldRef<"CodeLang", 'Int'>
    readonly cgname: FieldRef<"CodeLang", 'String'>
    readonly description: FieldRef<"CodeLang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodeLang findUnique
   */
  export type CodeLangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter, which CodeLang to fetch.
     */
    where: CodeLangWhereUniqueInput
  }

  /**
   * CodeLang findUniqueOrThrow
   */
  export type CodeLangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter, which CodeLang to fetch.
     */
    where: CodeLangWhereUniqueInput
  }

  /**
   * CodeLang findFirst
   */
  export type CodeLangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter, which CodeLang to fetch.
     */
    where?: CodeLangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLangs to fetch.
     */
    orderBy?: CodeLangOrderByWithRelationInput | CodeLangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeLangs.
     */
    cursor?: CodeLangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeLangs.
     */
    distinct?: CodeLangScalarFieldEnum | CodeLangScalarFieldEnum[]
  }

  /**
   * CodeLang findFirstOrThrow
   */
  export type CodeLangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter, which CodeLang to fetch.
     */
    where?: CodeLangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLangs to fetch.
     */
    orderBy?: CodeLangOrderByWithRelationInput | CodeLangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeLangs.
     */
    cursor?: CodeLangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeLangs.
     */
    distinct?: CodeLangScalarFieldEnum | CodeLangScalarFieldEnum[]
  }

  /**
   * CodeLang findMany
   */
  export type CodeLangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter, which CodeLangs to fetch.
     */
    where?: CodeLangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLangs to fetch.
     */
    orderBy?: CodeLangOrderByWithRelationInput | CodeLangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeLangs.
     */
    cursor?: CodeLangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLangs.
     */
    skip?: number
    distinct?: CodeLangScalarFieldEnum | CodeLangScalarFieldEnum[]
  }

  /**
   * CodeLang create
   */
  export type CodeLangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeLang.
     */
    data: XOR<CodeLangCreateInput, CodeLangUncheckedCreateInput>
  }

  /**
   * CodeLang createMany
   */
  export type CodeLangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeLangs.
     */
    data: CodeLangCreateManyInput | CodeLangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeLang createManyAndReturn
   */
  export type CodeLangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * The data used to create many CodeLangs.
     */
    data: CodeLangCreateManyInput | CodeLangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeLang update
   */
  export type CodeLangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeLang.
     */
    data: XOR<CodeLangUpdateInput, CodeLangUncheckedUpdateInput>
    /**
     * Choose, which CodeLang to update.
     */
    where: CodeLangWhereUniqueInput
  }

  /**
   * CodeLang updateMany
   */
  export type CodeLangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeLangs.
     */
    data: XOR<CodeLangUpdateManyMutationInput, CodeLangUncheckedUpdateManyInput>
    /**
     * Filter which CodeLangs to update
     */
    where?: CodeLangWhereInput
    /**
     * Limit how many CodeLangs to update.
     */
    limit?: number
  }

  /**
   * CodeLang updateManyAndReturn
   */
  export type CodeLangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * The data used to update CodeLangs.
     */
    data: XOR<CodeLangUpdateManyMutationInput, CodeLangUncheckedUpdateManyInput>
    /**
     * Filter which CodeLangs to update
     */
    where?: CodeLangWhereInput
    /**
     * Limit how many CodeLangs to update.
     */
    limit?: number
  }

  /**
   * CodeLang upsert
   */
  export type CodeLangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeLang to update in case it exists.
     */
    where: CodeLangWhereUniqueInput
    /**
     * In case the CodeLang found by the `where` argument doesn't exist, create a new CodeLang with this data.
     */
    create: XOR<CodeLangCreateInput, CodeLangUncheckedCreateInput>
    /**
     * In case the CodeLang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeLangUpdateInput, CodeLangUncheckedUpdateInput>
  }

  /**
   * CodeLang delete
   */
  export type CodeLangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
    /**
     * Filter which CodeLang to delete.
     */
    where: CodeLangWhereUniqueInput
  }

  /**
   * CodeLang deleteMany
   */
  export type CodeLangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeLangs to delete
     */
    where?: CodeLangWhereInput
    /**
     * Limit how many CodeLangs to delete.
     */
    limit?: number
  }

  /**
   * CodeLang.tasks
   */
  export type CodeLang$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * CodeLang.applications
   */
  export type CodeLang$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * CodeLang without action
   */
  export type CodeLangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLang
     */
    select?: CodeLangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLang
     */
    omit?: CodeLangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeLangInclude<ExtArgs> | null
  }


  /**
   * Model TaskType
   */

  export type AggregateTaskType = {
    _count: TaskTypeCountAggregateOutputType | null
    _avg: TaskTypeAvgAggregateOutputType | null
    _sum: TaskTypeSumAggregateOutputType | null
    _min: TaskTypeMinAggregateOutputType | null
    _max: TaskTypeMaxAggregateOutputType | null
  }

  export type TaskTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskTypeSumAggregateOutputType = {
    id: number | null
  }

  export type TaskTypeMinAggregateOutputType = {
    id: number | null
    tename: string | null
    description: string | null
  }

  export type TaskTypeMaxAggregateOutputType = {
    id: number | null
    tename: string | null
    description: string | null
  }

  export type TaskTypeCountAggregateOutputType = {
    id: number
    tename: number
    description: number
    _all: number
  }


  export type TaskTypeAvgAggregateInputType = {
    id?: true
  }

  export type TaskTypeSumAggregateInputType = {
    id?: true
  }

  export type TaskTypeMinAggregateInputType = {
    id?: true
    tename?: true
    description?: true
  }

  export type TaskTypeMaxAggregateInputType = {
    id?: true
    tename?: true
    description?: true
  }

  export type TaskTypeCountAggregateInputType = {
    id?: true
    tename?: true
    description?: true
    _all?: true
  }

  export type TaskTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskType to aggregate.
     */
    where?: TaskTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTypes to fetch.
     */
    orderBy?: TaskTypeOrderByWithRelationInput | TaskTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTypes
    **/
    _count?: true | TaskTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTypeMaxAggregateInputType
  }

  export type GetTaskTypeAggregateType<T extends TaskTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskType[P]>
      : GetScalarType<T[P], AggregateTaskType[P]>
  }




  export type TaskTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTypeWhereInput
    orderBy?: TaskTypeOrderByWithAggregationInput | TaskTypeOrderByWithAggregationInput[]
    by: TaskTypeScalarFieldEnum[] | TaskTypeScalarFieldEnum
    having?: TaskTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTypeCountAggregateInputType | true
    _avg?: TaskTypeAvgAggregateInputType
    _sum?: TaskTypeSumAggregateInputType
    _min?: TaskTypeMinAggregateInputType
    _max?: TaskTypeMaxAggregateInputType
  }

  export type TaskTypeGroupByOutputType = {
    id: number
    tename: string
    description: string
    _count: TaskTypeCountAggregateOutputType | null
    _avg: TaskTypeAvgAggregateOutputType | null
    _sum: TaskTypeSumAggregateOutputType | null
    _min: TaskTypeMinAggregateOutputType | null
    _max: TaskTypeMaxAggregateOutputType | null
  }

  type GetTaskTypeGroupByPayload<T extends TaskTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTypeGroupByOutputType[P]>
        }
      >
    >


  export type TaskTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tename?: boolean
    description?: boolean
    tasks?: boolean | TaskType$tasksArgs<ExtArgs>
    _count?: boolean | TaskTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskType"]>

  export type TaskTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tename?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskType"]>

  export type TaskTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tename?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskType"]>

  export type TaskTypeSelectScalar = {
    id?: boolean
    tename?: boolean
    description?: boolean
  }

  export type TaskTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tename" | "description", ExtArgs["result"]["taskType"]>
  export type TaskTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskType$tasksArgs<ExtArgs>
    _count?: boolean | TaskTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskType"
    objects: {
      tasks: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tename: string
      description: string
    }, ExtArgs["result"]["taskType"]>
    composites: {}
  }

  type TaskTypeGetPayload<S extends boolean | null | undefined | TaskTypeDefaultArgs> = $Result.GetResult<Prisma.$TaskTypePayload, S>

  type TaskTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTypeCountAggregateInputType | true
    }

  export interface TaskTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskType'], meta: { name: 'TaskType' } }
    /**
     * Find zero or one TaskType that matches the filter.
     * @param {TaskTypeFindUniqueArgs} args - Arguments to find a TaskType
     * @example
     * // Get one TaskType
     * const taskType = await prisma.taskType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTypeFindUniqueArgs>(args: SelectSubset<T, TaskTypeFindUniqueArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTypeFindUniqueOrThrowArgs} args - Arguments to find a TaskType
     * @example
     * // Get one TaskType
     * const taskType = await prisma.taskType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeFindFirstArgs} args - Arguments to find a TaskType
     * @example
     * // Get one TaskType
     * const taskType = await prisma.taskType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTypeFindFirstArgs>(args?: SelectSubset<T, TaskTypeFindFirstArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeFindFirstOrThrowArgs} args - Arguments to find a TaskType
     * @example
     * // Get one TaskType
     * const taskType = await prisma.taskType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTypes
     * const taskTypes = await prisma.taskType.findMany()
     * 
     * // Get first 10 TaskTypes
     * const taskTypes = await prisma.taskType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskTypeWithIdOnly = await prisma.taskType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskTypeFindManyArgs>(args?: SelectSubset<T, TaskTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskType.
     * @param {TaskTypeCreateArgs} args - Arguments to create a TaskType.
     * @example
     * // Create one TaskType
     * const TaskType = await prisma.taskType.create({
     *   data: {
     *     // ... data to create a TaskType
     *   }
     * })
     * 
     */
    create<T extends TaskTypeCreateArgs>(args: SelectSubset<T, TaskTypeCreateArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTypes.
     * @param {TaskTypeCreateManyArgs} args - Arguments to create many TaskTypes.
     * @example
     * // Create many TaskTypes
     * const taskType = await prisma.taskType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTypeCreateManyArgs>(args?: SelectSubset<T, TaskTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTypes and returns the data saved in the database.
     * @param {TaskTypeCreateManyAndReturnArgs} args - Arguments to create many TaskTypes.
     * @example
     * // Create many TaskTypes
     * const taskType = await prisma.taskType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTypes and only return the `id`
     * const taskTypeWithIdOnly = await prisma.taskType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskType.
     * @param {TaskTypeDeleteArgs} args - Arguments to delete one TaskType.
     * @example
     * // Delete one TaskType
     * const TaskType = await prisma.taskType.delete({
     *   where: {
     *     // ... filter to delete one TaskType
     *   }
     * })
     * 
     */
    delete<T extends TaskTypeDeleteArgs>(args: SelectSubset<T, TaskTypeDeleteArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskType.
     * @param {TaskTypeUpdateArgs} args - Arguments to update one TaskType.
     * @example
     * // Update one TaskType
     * const taskType = await prisma.taskType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTypeUpdateArgs>(args: SelectSubset<T, TaskTypeUpdateArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTypes.
     * @param {TaskTypeDeleteManyArgs} args - Arguments to filter TaskTypes to delete.
     * @example
     * // Delete a few TaskTypes
     * const { count } = await prisma.taskType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTypeDeleteManyArgs>(args?: SelectSubset<T, TaskTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTypes
     * const taskType = await prisma.taskType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTypeUpdateManyArgs>(args: SelectSubset<T, TaskTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTypes and returns the data updated in the database.
     * @param {TaskTypeUpdateManyAndReturnArgs} args - Arguments to update many TaskTypes.
     * @example
     * // Update many TaskTypes
     * const taskType = await prisma.taskType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskTypes and only return the `id`
     * const taskTypeWithIdOnly = await prisma.taskType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskType.
     * @param {TaskTypeUpsertArgs} args - Arguments to update or create a TaskType.
     * @example
     * // Update or create a TaskType
     * const taskType = await prisma.taskType.upsert({
     *   create: {
     *     // ... data to create a TaskType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskType we want to update
     *   }
     * })
     */
    upsert<T extends TaskTypeUpsertArgs>(args: SelectSubset<T, TaskTypeUpsertArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeCountArgs} args - Arguments to filter TaskTypes to count.
     * @example
     * // Count the number of TaskTypes
     * const count = await prisma.taskType.count({
     *   where: {
     *     // ... the filter for the TaskTypes we want to count
     *   }
     * })
    **/
    count<T extends TaskTypeCountArgs>(
      args?: Subset<T, TaskTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskTypeAggregateArgs>(args: Subset<T, TaskTypeAggregateArgs>): Prisma.PrismaPromise<GetTaskTypeAggregateType<T>>

    /**
     * Group by TaskType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTypeGroupByArgs['orderBy'] }
        : { orderBy?: TaskTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskType model
   */
  readonly fields: TaskTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends TaskType$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskType$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskType model
   */
  interface TaskTypeFieldRefs {
    readonly id: FieldRef<"TaskType", 'Int'>
    readonly tename: FieldRef<"TaskType", 'String'>
    readonly description: FieldRef<"TaskType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskType findUnique
   */
  export type TaskTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter, which TaskType to fetch.
     */
    where: TaskTypeWhereUniqueInput
  }

  /**
   * TaskType findUniqueOrThrow
   */
  export type TaskTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter, which TaskType to fetch.
     */
    where: TaskTypeWhereUniqueInput
  }

  /**
   * TaskType findFirst
   */
  export type TaskTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter, which TaskType to fetch.
     */
    where?: TaskTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTypes to fetch.
     */
    orderBy?: TaskTypeOrderByWithRelationInput | TaskTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTypes.
     */
    cursor?: TaskTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTypes.
     */
    distinct?: TaskTypeScalarFieldEnum | TaskTypeScalarFieldEnum[]
  }

  /**
   * TaskType findFirstOrThrow
   */
  export type TaskTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter, which TaskType to fetch.
     */
    where?: TaskTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTypes to fetch.
     */
    orderBy?: TaskTypeOrderByWithRelationInput | TaskTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTypes.
     */
    cursor?: TaskTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTypes.
     */
    distinct?: TaskTypeScalarFieldEnum | TaskTypeScalarFieldEnum[]
  }

  /**
   * TaskType findMany
   */
  export type TaskTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter, which TaskTypes to fetch.
     */
    where?: TaskTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTypes to fetch.
     */
    orderBy?: TaskTypeOrderByWithRelationInput | TaskTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTypes.
     */
    cursor?: TaskTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTypes.
     */
    skip?: number
    distinct?: TaskTypeScalarFieldEnum | TaskTypeScalarFieldEnum[]
  }

  /**
   * TaskType create
   */
  export type TaskTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskType.
     */
    data: XOR<TaskTypeCreateInput, TaskTypeUncheckedCreateInput>
  }

  /**
   * TaskType createMany
   */
  export type TaskTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTypes.
     */
    data: TaskTypeCreateManyInput | TaskTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskType createManyAndReturn
   */
  export type TaskTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TaskTypes.
     */
    data: TaskTypeCreateManyInput | TaskTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskType update
   */
  export type TaskTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskType.
     */
    data: XOR<TaskTypeUpdateInput, TaskTypeUncheckedUpdateInput>
    /**
     * Choose, which TaskType to update.
     */
    where: TaskTypeWhereUniqueInput
  }

  /**
   * TaskType updateMany
   */
  export type TaskTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTypes.
     */
    data: XOR<TaskTypeUpdateManyMutationInput, TaskTypeUncheckedUpdateManyInput>
    /**
     * Filter which TaskTypes to update
     */
    where?: TaskTypeWhereInput
    /**
     * Limit how many TaskTypes to update.
     */
    limit?: number
  }

  /**
   * TaskType updateManyAndReturn
   */
  export type TaskTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * The data used to update TaskTypes.
     */
    data: XOR<TaskTypeUpdateManyMutationInput, TaskTypeUncheckedUpdateManyInput>
    /**
     * Filter which TaskTypes to update
     */
    where?: TaskTypeWhereInput
    /**
     * Limit how many TaskTypes to update.
     */
    limit?: number
  }

  /**
   * TaskType upsert
   */
  export type TaskTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskType to update in case it exists.
     */
    where: TaskTypeWhereUniqueInput
    /**
     * In case the TaskType found by the `where` argument doesn't exist, create a new TaskType with this data.
     */
    create: XOR<TaskTypeCreateInput, TaskTypeUncheckedCreateInput>
    /**
     * In case the TaskType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTypeUpdateInput, TaskTypeUncheckedUpdateInput>
  }

  /**
   * TaskType delete
   */
  export type TaskTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
    /**
     * Filter which TaskType to delete.
     */
    where: TaskTypeWhereUniqueInput
  }

  /**
   * TaskType deleteMany
   */
  export type TaskTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTypes to delete
     */
    where?: TaskTypeWhereInput
    /**
     * Limit how many TaskTypes to delete.
     */
    limit?: number
  }

  /**
   * TaskType.tasks
   */
  export type TaskType$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskType without action
   */
  export type TaskTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskType
     */
    select?: TaskTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskType
     */
    omit?: TaskTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTypeInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    id: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: number | null
    wwname: string | null
    description: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
    context: string | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: number | null
    wwname: string | null
    description: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
    context: string | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    wwname: number
    description: number
    application: number
    fpath: number
    updated: number
    context: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    id?: true
  }

  export type WorkflowSumAggregateInputType = {
    id?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    wwname?: true
    description?: true
    application?: true
    fpath?: true
    updated?: true
    context?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    wwname?: true
    description?: true
    application?: true
    fpath?: true
    updated?: true
    context?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    wwname?: true
    description?: true
    application?: true
    fpath?: true
    updated?: true
    context?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: number
    wwname: string
    description: string
    application: string | null
    fpath: string | null
    updated: Date
    context: string | null
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wwname?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    context?: boolean
    tasks?: boolean | Workflow$tasksArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wwname?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    context?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wwname?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    context?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    wwname?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    context?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wwname" | "description" | "application" | "fpath" | "updated" | "context", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Workflow$tasksArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      tasks: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wwname: string
      description: string
      application: string | null
      fpath: string | null
      updated: Date
      context: string | null
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Workflow$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'Int'>
    readonly wwname: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly application: FieldRef<"Workflow", 'String'>
    readonly fpath: FieldRef<"Workflow", 'String'>
    readonly updated: FieldRef<"Workflow", 'DateTime'>
    readonly context: FieldRef<"Workflow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.tasks
   */
  export type Workflow$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    orden: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    orden: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    orden: number | null
    tkname: string | null
    description: string | null
    files: string | null
    folders: string | null
    final: boolean | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    orden: number | null
    tkname: string | null
    description: string | null
    files: string | null
    folders: string | null
    final: boolean | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: number
    description: number
    files: number
    folders: number
    final: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    orden?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    orden?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    orden?: true
    tkname?: true
    description?: true
    files?: true
    folders?: true
    final?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    orden?: true
    tkname?: true
    description?: true
    files?: true
    folders?: true
    final?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    orden?: true
    tkname?: true
    description?: true
    files?: true
    folders?: true
    final?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: string
    description: string | null
    files: string | null
    folders: string | null
    final: boolean
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    orden?: boolean
    tkname?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    final?: boolean
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    orden?: boolean
    tkname?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    final?: boolean
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    orden?: boolean
    tkname?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    final?: boolean
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    orden?: boolean
    tkname?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    final?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tasktypeId" | "codelangId" | "workflowId" | "orden" | "tkname" | "description" | "files" | "folders" | "final", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TaskTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      tasktype: Prisma.$TaskTypePayload<ExtArgs>
      codelang: Prisma.$CodeLangPayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tasktypeId: number
      codelangId: number
      workflowId: number
      orden: number
      tkname: string
      description: string | null
      files: string | null
      folders: string | null
      final: boolean
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasktype<T extends TaskTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskTypeDefaultArgs<ExtArgs>>): Prisma__TaskTypeClient<$Result.GetResult<Prisma.$TaskTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    codelang<T extends CodeLangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeLangDefaultArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'Int'>
    readonly tasktypeId: FieldRef<"task", 'Int'>
    readonly codelangId: FieldRef<"task", 'Int'>
    readonly workflowId: FieldRef<"task", 'Int'>
    readonly orden: FieldRef<"task", 'Int'>
    readonly tkname: FieldRef<"task", 'String'>
    readonly description: FieldRef<"task", 'String'>
    readonly files: FieldRef<"task", 'String'>
    readonly folders: FieldRef<"task", 'String'>
    readonly final: FieldRef<"task", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model AppType
   */

  export type AggregateAppType = {
    _count: AppTypeCountAggregateOutputType | null
    _avg: AppTypeAvgAggregateOutputType | null
    _sum: AppTypeSumAggregateOutputType | null
    _min: AppTypeMinAggregateOutputType | null
    _max: AppTypeMaxAggregateOutputType | null
  }

  export type AppTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type AppTypeSumAggregateOutputType = {
    id: number | null
  }

  export type AppTypeMinAggregateOutputType = {
    id: number | null
    aename: string | null
    description: string | null
  }

  export type AppTypeMaxAggregateOutputType = {
    id: number | null
    aename: string | null
    description: string | null
  }

  export type AppTypeCountAggregateOutputType = {
    id: number
    aename: number
    description: number
    _all: number
  }


  export type AppTypeAvgAggregateInputType = {
    id?: true
  }

  export type AppTypeSumAggregateInputType = {
    id?: true
  }

  export type AppTypeMinAggregateInputType = {
    id?: true
    aename?: true
    description?: true
  }

  export type AppTypeMaxAggregateInputType = {
    id?: true
    aename?: true
    description?: true
  }

  export type AppTypeCountAggregateInputType = {
    id?: true
    aename?: true
    description?: true
    _all?: true
  }

  export type AppTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppType to aggregate.
     */
    where?: AppTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTypes to fetch.
     */
    orderBy?: AppTypeOrderByWithRelationInput | AppTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppTypes
    **/
    _count?: true | AppTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppTypeMaxAggregateInputType
  }

  export type GetAppTypeAggregateType<T extends AppTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAppType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppType[P]>
      : GetScalarType<T[P], AggregateAppType[P]>
  }




  export type AppTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppTypeWhereInput
    orderBy?: AppTypeOrderByWithAggregationInput | AppTypeOrderByWithAggregationInput[]
    by: AppTypeScalarFieldEnum[] | AppTypeScalarFieldEnum
    having?: AppTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppTypeCountAggregateInputType | true
    _avg?: AppTypeAvgAggregateInputType
    _sum?: AppTypeSumAggregateInputType
    _min?: AppTypeMinAggregateInputType
    _max?: AppTypeMaxAggregateInputType
  }

  export type AppTypeGroupByOutputType = {
    id: number
    aename: string
    description: string
    _count: AppTypeCountAggregateOutputType | null
    _avg: AppTypeAvgAggregateOutputType | null
    _sum: AppTypeSumAggregateOutputType | null
    _min: AppTypeMinAggregateOutputType | null
    _max: AppTypeMaxAggregateOutputType | null
  }

  type GetAppTypeGroupByPayload<T extends AppTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AppTypeGroupByOutputType[P]>
        }
      >
    >


  export type AppTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aename?: boolean
    description?: boolean
    applications?: boolean | AppType$applicationsArgs<ExtArgs>
    _count?: boolean | AppTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appType"]>

  export type AppTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aename?: boolean
    description?: boolean
  }, ExtArgs["result"]["appType"]>

  export type AppTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aename?: boolean
    description?: boolean
  }, ExtArgs["result"]["appType"]>

  export type AppTypeSelectScalar = {
    id?: boolean
    aename?: boolean
    description?: boolean
  }

  export type AppTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aename" | "description", ExtArgs["result"]["appType"]>
  export type AppTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | AppType$applicationsArgs<ExtArgs>
    _count?: boolean | AppTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppType"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aename: string
      description: string
    }, ExtArgs["result"]["appType"]>
    composites: {}
  }

  type AppTypeGetPayload<S extends boolean | null | undefined | AppTypeDefaultArgs> = $Result.GetResult<Prisma.$AppTypePayload, S>

  type AppTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppTypeCountAggregateInputType | true
    }

  export interface AppTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppType'], meta: { name: 'AppType' } }
    /**
     * Find zero or one AppType that matches the filter.
     * @param {AppTypeFindUniqueArgs} args - Arguments to find a AppType
     * @example
     * // Get one AppType
     * const appType = await prisma.appType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppTypeFindUniqueArgs>(args: SelectSubset<T, AppTypeFindUniqueArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppTypeFindUniqueOrThrowArgs} args - Arguments to find a AppType
     * @example
     * // Get one AppType
     * const appType = await prisma.appType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AppTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeFindFirstArgs} args - Arguments to find a AppType
     * @example
     * // Get one AppType
     * const appType = await prisma.appType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppTypeFindFirstArgs>(args?: SelectSubset<T, AppTypeFindFirstArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeFindFirstOrThrowArgs} args - Arguments to find a AppType
     * @example
     * // Get one AppType
     * const appType = await prisma.appType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AppTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppTypes
     * const appTypes = await prisma.appType.findMany()
     * 
     * // Get first 10 AppTypes
     * const appTypes = await prisma.appType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appTypeWithIdOnly = await prisma.appType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppTypeFindManyArgs>(args?: SelectSubset<T, AppTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppType.
     * @param {AppTypeCreateArgs} args - Arguments to create a AppType.
     * @example
     * // Create one AppType
     * const AppType = await prisma.appType.create({
     *   data: {
     *     // ... data to create a AppType
     *   }
     * })
     * 
     */
    create<T extends AppTypeCreateArgs>(args: SelectSubset<T, AppTypeCreateArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppTypes.
     * @param {AppTypeCreateManyArgs} args - Arguments to create many AppTypes.
     * @example
     * // Create many AppTypes
     * const appType = await prisma.appType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppTypeCreateManyArgs>(args?: SelectSubset<T, AppTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppTypes and returns the data saved in the database.
     * @param {AppTypeCreateManyAndReturnArgs} args - Arguments to create many AppTypes.
     * @example
     * // Create many AppTypes
     * const appType = await prisma.appType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppTypes and only return the `id`
     * const appTypeWithIdOnly = await prisma.appType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AppTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppType.
     * @param {AppTypeDeleteArgs} args - Arguments to delete one AppType.
     * @example
     * // Delete one AppType
     * const AppType = await prisma.appType.delete({
     *   where: {
     *     // ... filter to delete one AppType
     *   }
     * })
     * 
     */
    delete<T extends AppTypeDeleteArgs>(args: SelectSubset<T, AppTypeDeleteArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppType.
     * @param {AppTypeUpdateArgs} args - Arguments to update one AppType.
     * @example
     * // Update one AppType
     * const appType = await prisma.appType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppTypeUpdateArgs>(args: SelectSubset<T, AppTypeUpdateArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppTypes.
     * @param {AppTypeDeleteManyArgs} args - Arguments to filter AppTypes to delete.
     * @example
     * // Delete a few AppTypes
     * const { count } = await prisma.appType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppTypeDeleteManyArgs>(args?: SelectSubset<T, AppTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppTypes
     * const appType = await prisma.appType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppTypeUpdateManyArgs>(args: SelectSubset<T, AppTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppTypes and returns the data updated in the database.
     * @param {AppTypeUpdateManyAndReturnArgs} args - Arguments to update many AppTypes.
     * @example
     * // Update many AppTypes
     * const appType = await prisma.appType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppTypes and only return the `id`
     * const appTypeWithIdOnly = await prisma.appType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AppTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppType.
     * @param {AppTypeUpsertArgs} args - Arguments to update or create a AppType.
     * @example
     * // Update or create a AppType
     * const appType = await prisma.appType.upsert({
     *   create: {
     *     // ... data to create a AppType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppType we want to update
     *   }
     * })
     */
    upsert<T extends AppTypeUpsertArgs>(args: SelectSubset<T, AppTypeUpsertArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeCountArgs} args - Arguments to filter AppTypes to count.
     * @example
     * // Count the number of AppTypes
     * const count = await prisma.appType.count({
     *   where: {
     *     // ... the filter for the AppTypes we want to count
     *   }
     * })
    **/
    count<T extends AppTypeCountArgs>(
      args?: Subset<T, AppTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppTypeAggregateArgs>(args: Subset<T, AppTypeAggregateArgs>): Prisma.PrismaPromise<GetAppTypeAggregateType<T>>

    /**
     * Group by AppType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppTypeGroupByArgs['orderBy'] }
        : { orderBy?: AppTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppType model
   */
  readonly fields: AppTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends AppType$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, AppType$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppType model
   */
  interface AppTypeFieldRefs {
    readonly id: FieldRef<"AppType", 'Int'>
    readonly aename: FieldRef<"AppType", 'String'>
    readonly description: FieldRef<"AppType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppType findUnique
   */
  export type AppTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppType to fetch.
     */
    where: AppTypeWhereUniqueInput
  }

  /**
   * AppType findUniqueOrThrow
   */
  export type AppTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppType to fetch.
     */
    where: AppTypeWhereUniqueInput
  }

  /**
   * AppType findFirst
   */
  export type AppTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppType to fetch.
     */
    where?: AppTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTypes to fetch.
     */
    orderBy?: AppTypeOrderByWithRelationInput | AppTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppTypes.
     */
    cursor?: AppTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppTypes.
     */
    distinct?: AppTypeScalarFieldEnum | AppTypeScalarFieldEnum[]
  }

  /**
   * AppType findFirstOrThrow
   */
  export type AppTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppType to fetch.
     */
    where?: AppTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTypes to fetch.
     */
    orderBy?: AppTypeOrderByWithRelationInput | AppTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppTypes.
     */
    cursor?: AppTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppTypes.
     */
    distinct?: AppTypeScalarFieldEnum | AppTypeScalarFieldEnum[]
  }

  /**
   * AppType findMany
   */
  export type AppTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppTypes to fetch.
     */
    where?: AppTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppTypes to fetch.
     */
    orderBy?: AppTypeOrderByWithRelationInput | AppTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppTypes.
     */
    cursor?: AppTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppTypes.
     */
    skip?: number
    distinct?: AppTypeScalarFieldEnum | AppTypeScalarFieldEnum[]
  }

  /**
   * AppType create
   */
  export type AppTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AppType.
     */
    data: XOR<AppTypeCreateInput, AppTypeUncheckedCreateInput>
  }

  /**
   * AppType createMany
   */
  export type AppTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppTypes.
     */
    data: AppTypeCreateManyInput | AppTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppType createManyAndReturn
   */
  export type AppTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AppTypes.
     */
    data: AppTypeCreateManyInput | AppTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppType update
   */
  export type AppTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AppType.
     */
    data: XOR<AppTypeUpdateInput, AppTypeUncheckedUpdateInput>
    /**
     * Choose, which AppType to update.
     */
    where: AppTypeWhereUniqueInput
  }

  /**
   * AppType updateMany
   */
  export type AppTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppTypes.
     */
    data: XOR<AppTypeUpdateManyMutationInput, AppTypeUncheckedUpdateManyInput>
    /**
     * Filter which AppTypes to update
     */
    where?: AppTypeWhereInput
    /**
     * Limit how many AppTypes to update.
     */
    limit?: number
  }

  /**
   * AppType updateManyAndReturn
   */
  export type AppTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * The data used to update AppTypes.
     */
    data: XOR<AppTypeUpdateManyMutationInput, AppTypeUncheckedUpdateManyInput>
    /**
     * Filter which AppTypes to update
     */
    where?: AppTypeWhereInput
    /**
     * Limit how many AppTypes to update.
     */
    limit?: number
  }

  /**
   * AppType upsert
   */
  export type AppTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AppType to update in case it exists.
     */
    where: AppTypeWhereUniqueInput
    /**
     * In case the AppType found by the `where` argument doesn't exist, create a new AppType with this data.
     */
    create: XOR<AppTypeCreateInput, AppTypeUncheckedCreateInput>
    /**
     * In case the AppType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppTypeUpdateInput, AppTypeUncheckedUpdateInput>
  }

  /**
   * AppType delete
   */
  export type AppTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
    /**
     * Filter which AppType to delete.
     */
    where: AppTypeWhereUniqueInput
  }

  /**
   * AppType deleteMany
   */
  export type AppTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppTypes to delete
     */
    where?: AppTypeWhereInput
    /**
     * Limit how many AppTypes to delete.
     */
    limit?: number
  }

  /**
   * AppType.applications
   */
  export type AppType$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * AppType without action
   */
  export type AppTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppType
     */
    select?: AppTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppType
     */
    omit?: AppTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppTypeInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    apptypeId: number | null
    codelangId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    apptypeId: number | null
    codelangId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    apptypeId: number | null
    codelangId: number | null
    anname: string | null
    description: string | null
    repository: string | null
    author: string | null
    osystem: string | null
    appurl: string | null
    apppath: string | null
    localdev: boolean | null
    usedocker: boolean | null
    controlusers: boolean | null
    useui: boolean | null
    useagents: boolean | null
    consumedb: boolean | null
    consumeapi: boolean | null
    consumeai: boolean | null
    exposedb: boolean | null
    exposeapi: boolean | null
    updated: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    apptypeId: number | null
    codelangId: number | null
    anname: string | null
    description: string | null
    repository: string | null
    author: string | null
    osystem: string | null
    appurl: string | null
    apppath: string | null
    localdev: boolean | null
    usedocker: boolean | null
    controlusers: boolean | null
    useui: boolean | null
    useagents: boolean | null
    consumedb: boolean | null
    consumeapi: boolean | null
    consumeai: boolean | null
    exposedb: boolean | null
    exposeapi: boolean | null
    updated: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    apptypeId: number
    codelangId: number
    anname: number
    description: number
    repository: number
    author: number
    osystem: number
    appurl: number
    apppath: number
    localdev: number
    usedocker: number
    controlusers: number
    useui: number
    useagents: number
    consumedb: number
    consumeapi: number
    consumeai: number
    exposedb: number
    exposeapi: number
    updated: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    apptypeId?: true
    codelangId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    apptypeId?: true
    codelangId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    apptypeId?: true
    codelangId?: true
    anname?: true
    description?: true
    repository?: true
    author?: true
    osystem?: true
    appurl?: true
    apppath?: true
    localdev?: true
    usedocker?: true
    controlusers?: true
    useui?: true
    useagents?: true
    consumedb?: true
    consumeapi?: true
    consumeai?: true
    exposedb?: true
    exposeapi?: true
    updated?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    apptypeId?: true
    codelangId?: true
    anname?: true
    description?: true
    repository?: true
    author?: true
    osystem?: true
    appurl?: true
    apppath?: true
    localdev?: true
    usedocker?: true
    controlusers?: true
    useui?: true
    useagents?: true
    consumedb?: true
    consumeapi?: true
    consumeai?: true
    exposedb?: true
    exposeapi?: true
    updated?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    apptypeId?: true
    codelangId?: true
    anname?: true
    description?: true
    repository?: true
    author?: true
    osystem?: true
    appurl?: true
    apppath?: true
    localdev?: true
    usedocker?: true
    controlusers?: true
    useui?: true
    useagents?: true
    consumedb?: true
    consumeapi?: true
    consumeai?: true
    exposedb?: true
    exposeapi?: true
    updated?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    apptypeId: number
    codelangId: number
    anname: string
    description: string
    repository: string
    author: string | null
    osystem: string | null
    appurl: string | null
    apppath: string | null
    localdev: boolean
    usedocker: boolean
    controlusers: boolean
    useui: boolean
    useagents: boolean
    consumedb: boolean
    consumeapi: boolean
    consumeai: boolean
    exposedb: boolean
    exposeapi: boolean
    updated: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    anname?: boolean
    description?: boolean
    repository?: boolean
    author?: boolean
    osystem?: boolean
    appurl?: boolean
    apppath?: boolean
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: boolean
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    anname?: boolean
    description?: boolean
    repository?: boolean
    author?: boolean
    osystem?: boolean
    appurl?: boolean
    apppath?: boolean
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: boolean
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    anname?: boolean
    description?: boolean
    repository?: boolean
    author?: boolean
    osystem?: boolean
    appurl?: boolean
    apppath?: boolean
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: boolean
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    anname?: boolean
    description?: boolean
    repository?: boolean
    author?: boolean
    osystem?: boolean
    appurl?: boolean
    apppath?: boolean
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apptypeId" | "codelangId" | "anname" | "description" | "repository" | "author" | "osystem" | "appurl" | "apppath" | "localdev" | "usedocker" | "controlusers" | "useui" | "useagents" | "consumedb" | "consumeapi" | "consumeai" | "exposedb" | "exposeapi" | "updated", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | AppTypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodeLangDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      apptype: Prisma.$AppTypePayload<ExtArgs>
      codelang: Prisma.$CodeLangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apptypeId: number
      codelangId: number
      anname: string
      description: string
      repository: string
      author: string | null
      osystem: string | null
      appurl: string | null
      apppath: string | null
      localdev: boolean
      usedocker: boolean
      controlusers: boolean
      useui: boolean
      useagents: boolean
      consumedb: boolean
      consumeapi: boolean
      consumeai: boolean
      exposedb: boolean
      exposeapi: boolean
      updated: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apptype<T extends AppTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppTypeDefaultArgs<ExtArgs>>): Prisma__AppTypeClient<$Result.GetResult<Prisma.$AppTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    codelang<T extends CodeLangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeLangDefaultArgs<ExtArgs>>): Prisma__CodeLangClient<$Result.GetResult<Prisma.$CodeLangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly apptypeId: FieldRef<"Application", 'Int'>
    readonly codelangId: FieldRef<"Application", 'Int'>
    readonly anname: FieldRef<"Application", 'String'>
    readonly description: FieldRef<"Application", 'String'>
    readonly repository: FieldRef<"Application", 'String'>
    readonly author: FieldRef<"Application", 'String'>
    readonly osystem: FieldRef<"Application", 'String'>
    readonly appurl: FieldRef<"Application", 'String'>
    readonly apppath: FieldRef<"Application", 'String'>
    readonly localdev: FieldRef<"Application", 'Boolean'>
    readonly usedocker: FieldRef<"Application", 'Boolean'>
    readonly controlusers: FieldRef<"Application", 'Boolean'>
    readonly useui: FieldRef<"Application", 'Boolean'>
    readonly useagents: FieldRef<"Application", 'Boolean'>
    readonly consumedb: FieldRef<"Application", 'Boolean'>
    readonly consumeapi: FieldRef<"Application", 'Boolean'>
    readonly consumeai: FieldRef<"Application", 'Boolean'>
    readonly exposedb: FieldRef<"Application", 'Boolean'>
    readonly exposeapi: FieldRef<"Application", 'Boolean'>
    readonly updated: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CodeLangScalarFieldEnum: {
    id: 'id',
    cgname: 'cgname',
    description: 'description'
  };

  export type CodeLangScalarFieldEnum = (typeof CodeLangScalarFieldEnum)[keyof typeof CodeLangScalarFieldEnum]


  export const TaskTypeScalarFieldEnum: {
    id: 'id',
    tename: 'tename',
    description: 'description'
  };

  export type TaskTypeScalarFieldEnum = (typeof TaskTypeScalarFieldEnum)[keyof typeof TaskTypeScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    wwname: 'wwname',
    description: 'description',
    application: 'application',
    fpath: 'fpath',
    updated: 'updated',
    context: 'context'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    tasktypeId: 'tasktypeId',
    codelangId: 'codelangId',
    workflowId: 'workflowId',
    orden: 'orden',
    tkname: 'tkname',
    description: 'description',
    files: 'files',
    folders: 'folders',
    final: 'final'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const AppTypeScalarFieldEnum: {
    id: 'id',
    aename: 'aename',
    description: 'description'
  };

  export type AppTypeScalarFieldEnum = (typeof AppTypeScalarFieldEnum)[keyof typeof AppTypeScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    apptypeId: 'apptypeId',
    codelangId: 'codelangId',
    anname: 'anname',
    description: 'description',
    repository: 'repository',
    author: 'author',
    osystem: 'osystem',
    appurl: 'appurl',
    apppath: 'apppath',
    localdev: 'localdev',
    usedocker: 'usedocker',
    controlusers: 'controlusers',
    useui: 'useui',
    useagents: 'useagents',
    consumedb: 'consumedb',
    consumeapi: 'consumeapi',
    consumeai: 'consumeai',
    exposedb: 'exposedb',
    exposeapi: 'exposeapi',
    updated: 'updated'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CodeLangWhereInput = {
    AND?: CodeLangWhereInput | CodeLangWhereInput[]
    OR?: CodeLangWhereInput[]
    NOT?: CodeLangWhereInput | CodeLangWhereInput[]
    id?: IntFilter<"CodeLang"> | number
    cgname?: StringFilter<"CodeLang"> | string
    description?: StringFilter<"CodeLang"> | string
    tasks?: TaskListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type CodeLangOrderByWithRelationInput = {
    id?: SortOrder
    cgname?: SortOrder
    description?: SortOrder
    tasks?: taskOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type CodeLangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cgname?: string
    AND?: CodeLangWhereInput | CodeLangWhereInput[]
    OR?: CodeLangWhereInput[]
    NOT?: CodeLangWhereInput | CodeLangWhereInput[]
    description?: StringFilter<"CodeLang"> | string
    tasks?: TaskListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "cgname">

  export type CodeLangOrderByWithAggregationInput = {
    id?: SortOrder
    cgname?: SortOrder
    description?: SortOrder
    _count?: CodeLangCountOrderByAggregateInput
    _avg?: CodeLangAvgOrderByAggregateInput
    _max?: CodeLangMaxOrderByAggregateInput
    _min?: CodeLangMinOrderByAggregateInput
    _sum?: CodeLangSumOrderByAggregateInput
  }

  export type CodeLangScalarWhereWithAggregatesInput = {
    AND?: CodeLangScalarWhereWithAggregatesInput | CodeLangScalarWhereWithAggregatesInput[]
    OR?: CodeLangScalarWhereWithAggregatesInput[]
    NOT?: CodeLangScalarWhereWithAggregatesInput | CodeLangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CodeLang"> | number
    cgname?: StringWithAggregatesFilter<"CodeLang"> | string
    description?: StringWithAggregatesFilter<"CodeLang"> | string
  }

  export type TaskTypeWhereInput = {
    AND?: TaskTypeWhereInput | TaskTypeWhereInput[]
    OR?: TaskTypeWhereInput[]
    NOT?: TaskTypeWhereInput | TaskTypeWhereInput[]
    id?: IntFilter<"TaskType"> | number
    tename?: StringFilter<"TaskType"> | string
    description?: StringFilter<"TaskType"> | string
    tasks?: TaskListRelationFilter
  }

  export type TaskTypeOrderByWithRelationInput = {
    id?: SortOrder
    tename?: SortOrder
    description?: SortOrder
    tasks?: taskOrderByRelationAggregateInput
  }

  export type TaskTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tename?: string
    AND?: TaskTypeWhereInput | TaskTypeWhereInput[]
    OR?: TaskTypeWhereInput[]
    NOT?: TaskTypeWhereInput | TaskTypeWhereInput[]
    description?: StringFilter<"TaskType"> | string
    tasks?: TaskListRelationFilter
  }, "id" | "tename">

  export type TaskTypeOrderByWithAggregationInput = {
    id?: SortOrder
    tename?: SortOrder
    description?: SortOrder
    _count?: TaskTypeCountOrderByAggregateInput
    _avg?: TaskTypeAvgOrderByAggregateInput
    _max?: TaskTypeMaxOrderByAggregateInput
    _min?: TaskTypeMinOrderByAggregateInput
    _sum?: TaskTypeSumOrderByAggregateInput
  }

  export type TaskTypeScalarWhereWithAggregatesInput = {
    AND?: TaskTypeScalarWhereWithAggregatesInput | TaskTypeScalarWhereWithAggregatesInput[]
    OR?: TaskTypeScalarWhereWithAggregatesInput[]
    NOT?: TaskTypeScalarWhereWithAggregatesInput | TaskTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskType"> | number
    tename?: StringWithAggregatesFilter<"TaskType"> | string
    description?: StringWithAggregatesFilter<"TaskType"> | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: IntFilter<"Workflow"> | number
    wwname?: StringFilter<"Workflow"> | string
    description?: StringFilter<"Workflow"> | string
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    context?: StringNullableFilter<"Workflow"> | string | null
    tasks?: TaskListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    wwname?: SortOrder
    description?: SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
    context?: SortOrderInput | SortOrder
    tasks?: taskOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wwname?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    description?: StringFilter<"Workflow"> | string
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    context?: StringNullableFilter<"Workflow"> | string | null
    tasks?: TaskListRelationFilter
  }, "id" | "wwname">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    wwname?: SortOrder
    description?: SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
    context?: SortOrderInput | SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workflow"> | number
    wwname?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringWithAggregatesFilter<"Workflow"> | string
    application?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    fpath?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    updated?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    context?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: IntFilter<"task"> | number
    tasktypeId?: IntFilter<"task"> | number
    codelangId?: IntFilter<"task"> | number
    workflowId?: IntFilter<"task"> | number
    orden?: IntFilter<"task"> | number
    tkname?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    files?: StringNullableFilter<"task"> | string | null
    folders?: StringNullableFilter<"task"> | string | null
    final?: BoolFilter<"task"> | boolean
    tasktype?: XOR<TaskTypeScalarRelationFilter, TaskTypeWhereInput>
    codelang?: XOR<CodeLangScalarRelationFilter, CodeLangWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
    tkname?: SortOrder
    description?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    folders?: SortOrderInput | SortOrder
    final?: SortOrder
    tasktype?: TaskTypeOrderByWithRelationInput
    codelang?: CodeLangOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tkname?: string
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    tasktypeId?: IntFilter<"task"> | number
    codelangId?: IntFilter<"task"> | number
    workflowId?: IntFilter<"task"> | number
    orden?: IntFilter<"task"> | number
    description?: StringNullableFilter<"task"> | string | null
    files?: StringNullableFilter<"task"> | string | null
    folders?: StringNullableFilter<"task"> | string | null
    final?: BoolFilter<"task"> | boolean
    tasktype?: XOR<TaskTypeScalarRelationFilter, TaskTypeWhereInput>
    codelang?: XOR<CodeLangScalarRelationFilter, CodeLangWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id" | "tkname">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
    tkname?: SortOrder
    description?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    folders?: SortOrderInput | SortOrder
    final?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task"> | number
    tasktypeId?: IntWithAggregatesFilter<"task"> | number
    codelangId?: IntWithAggregatesFilter<"task"> | number
    workflowId?: IntWithAggregatesFilter<"task"> | number
    orden?: IntWithAggregatesFilter<"task"> | number
    tkname?: StringWithAggregatesFilter<"task"> | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    files?: StringNullableWithAggregatesFilter<"task"> | string | null
    folders?: StringNullableWithAggregatesFilter<"task"> | string | null
    final?: BoolWithAggregatesFilter<"task"> | boolean
  }

  export type AppTypeWhereInput = {
    AND?: AppTypeWhereInput | AppTypeWhereInput[]
    OR?: AppTypeWhereInput[]
    NOT?: AppTypeWhereInput | AppTypeWhereInput[]
    id?: IntFilter<"AppType"> | number
    aename?: StringFilter<"AppType"> | string
    description?: StringFilter<"AppType"> | string
    applications?: ApplicationListRelationFilter
  }

  export type AppTypeOrderByWithRelationInput = {
    id?: SortOrder
    aename?: SortOrder
    description?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type AppTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aename?: string
    AND?: AppTypeWhereInput | AppTypeWhereInput[]
    OR?: AppTypeWhereInput[]
    NOT?: AppTypeWhereInput | AppTypeWhereInput[]
    description?: StringFilter<"AppType"> | string
    applications?: ApplicationListRelationFilter
  }, "id" | "aename">

  export type AppTypeOrderByWithAggregationInput = {
    id?: SortOrder
    aename?: SortOrder
    description?: SortOrder
    _count?: AppTypeCountOrderByAggregateInput
    _avg?: AppTypeAvgOrderByAggregateInput
    _max?: AppTypeMaxOrderByAggregateInput
    _min?: AppTypeMinOrderByAggregateInput
    _sum?: AppTypeSumOrderByAggregateInput
  }

  export type AppTypeScalarWhereWithAggregatesInput = {
    AND?: AppTypeScalarWhereWithAggregatesInput | AppTypeScalarWhereWithAggregatesInput[]
    OR?: AppTypeScalarWhereWithAggregatesInput[]
    NOT?: AppTypeScalarWhereWithAggregatesInput | AppTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppType"> | number
    aename?: StringWithAggregatesFilter<"AppType"> | string
    description?: StringWithAggregatesFilter<"AppType"> | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    apptypeId?: IntFilter<"Application"> | number
    codelangId?: IntFilter<"Application"> | number
    anname?: StringFilter<"Application"> | string
    description?: StringFilter<"Application"> | string
    repository?: StringFilter<"Application"> | string
    author?: StringNullableFilter<"Application"> | string | null
    osystem?: StringNullableFilter<"Application"> | string | null
    appurl?: StringNullableFilter<"Application"> | string | null
    apppath?: StringNullableFilter<"Application"> | string | null
    localdev?: BoolFilter<"Application"> | boolean
    usedocker?: BoolFilter<"Application"> | boolean
    controlusers?: BoolFilter<"Application"> | boolean
    useui?: BoolFilter<"Application"> | boolean
    useagents?: BoolFilter<"Application"> | boolean
    consumedb?: BoolFilter<"Application"> | boolean
    consumeapi?: BoolFilter<"Application"> | boolean
    consumeai?: BoolFilter<"Application"> | boolean
    exposedb?: BoolFilter<"Application"> | boolean
    exposeapi?: BoolFilter<"Application"> | boolean
    updated?: DateTimeFilter<"Application"> | Date | string
    apptype?: XOR<AppTypeScalarRelationFilter, AppTypeWhereInput>
    codelang?: XOR<CodeLangScalarRelationFilter, CodeLangWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    anname?: SortOrder
    description?: SortOrder
    repository?: SortOrder
    author?: SortOrderInput | SortOrder
    osystem?: SortOrderInput | SortOrder
    appurl?: SortOrderInput | SortOrder
    apppath?: SortOrderInput | SortOrder
    localdev?: SortOrder
    usedocker?: SortOrder
    controlusers?: SortOrder
    useui?: SortOrder
    useagents?: SortOrder
    consumedb?: SortOrder
    consumeapi?: SortOrder
    consumeai?: SortOrder
    exposedb?: SortOrder
    exposeapi?: SortOrder
    updated?: SortOrder
    apptype?: AppTypeOrderByWithRelationInput
    codelang?: CodeLangOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    anname?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    apptypeId?: IntFilter<"Application"> | number
    codelangId?: IntFilter<"Application"> | number
    description?: StringFilter<"Application"> | string
    repository?: StringFilter<"Application"> | string
    author?: StringNullableFilter<"Application"> | string | null
    osystem?: StringNullableFilter<"Application"> | string | null
    appurl?: StringNullableFilter<"Application"> | string | null
    apppath?: StringNullableFilter<"Application"> | string | null
    localdev?: BoolFilter<"Application"> | boolean
    usedocker?: BoolFilter<"Application"> | boolean
    controlusers?: BoolFilter<"Application"> | boolean
    useui?: BoolFilter<"Application"> | boolean
    useagents?: BoolFilter<"Application"> | boolean
    consumedb?: BoolFilter<"Application"> | boolean
    consumeapi?: BoolFilter<"Application"> | boolean
    consumeai?: BoolFilter<"Application"> | boolean
    exposedb?: BoolFilter<"Application"> | boolean
    exposeapi?: BoolFilter<"Application"> | boolean
    updated?: DateTimeFilter<"Application"> | Date | string
    apptype?: XOR<AppTypeScalarRelationFilter, AppTypeWhereInput>
    codelang?: XOR<CodeLangScalarRelationFilter, CodeLangWhereInput>
  }, "id" | "anname">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    anname?: SortOrder
    description?: SortOrder
    repository?: SortOrder
    author?: SortOrderInput | SortOrder
    osystem?: SortOrderInput | SortOrder
    appurl?: SortOrderInput | SortOrder
    apppath?: SortOrderInput | SortOrder
    localdev?: SortOrder
    usedocker?: SortOrder
    controlusers?: SortOrder
    useui?: SortOrder
    useagents?: SortOrder
    consumedb?: SortOrder
    consumeapi?: SortOrder
    consumeai?: SortOrder
    exposedb?: SortOrder
    exposeapi?: SortOrder
    updated?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    apptypeId?: IntWithAggregatesFilter<"Application"> | number
    codelangId?: IntWithAggregatesFilter<"Application"> | number
    anname?: StringWithAggregatesFilter<"Application"> | string
    description?: StringWithAggregatesFilter<"Application"> | string
    repository?: StringWithAggregatesFilter<"Application"> | string
    author?: StringNullableWithAggregatesFilter<"Application"> | string | null
    osystem?: StringNullableWithAggregatesFilter<"Application"> | string | null
    appurl?: StringNullableWithAggregatesFilter<"Application"> | string | null
    apppath?: StringNullableWithAggregatesFilter<"Application"> | string | null
    localdev?: BoolWithAggregatesFilter<"Application"> | boolean
    usedocker?: BoolWithAggregatesFilter<"Application"> | boolean
    controlusers?: BoolWithAggregatesFilter<"Application"> | boolean
    useui?: BoolWithAggregatesFilter<"Application"> | boolean
    useagents?: BoolWithAggregatesFilter<"Application"> | boolean
    consumedb?: BoolWithAggregatesFilter<"Application"> | boolean
    consumeapi?: BoolWithAggregatesFilter<"Application"> | boolean
    consumeai?: BoolWithAggregatesFilter<"Application"> | boolean
    exposedb?: BoolWithAggregatesFilter<"Application"> | boolean
    exposeapi?: BoolWithAggregatesFilter<"Application"> | boolean
    updated?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type CodeLangCreateInput = {
    cgname: string
    description: string
    tasks?: taskCreateNestedManyWithoutCodelangInput
    applications?: ApplicationCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangUncheckedCreateInput = {
    id?: number
    cgname: string
    description: string
    tasks?: taskUncheckedCreateNestedManyWithoutCodelangInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangUpdateInput = {
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutCodelangNestedInput
    applications?: ApplicationUpdateManyWithoutCodelangNestedInput
  }

  export type CodeLangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUncheckedUpdateManyWithoutCodelangNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCodelangNestedInput
  }

  export type CodeLangCreateManyInput = {
    id?: number
    cgname: string
    description: string
  }

  export type CodeLangUpdateManyMutationInput = {
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTypeCreateInput = {
    tename: string
    description: string
    tasks?: taskCreateNestedManyWithoutTasktypeInput
  }

  export type TaskTypeUncheckedCreateInput = {
    id?: number
    tename: string
    description: string
    tasks?: taskUncheckedCreateNestedManyWithoutTasktypeInput
  }

  export type TaskTypeUpdateInput = {
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutTasktypeNestedInput
  }

  export type TaskTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUncheckedUpdateManyWithoutTasktypeNestedInput
  }

  export type TaskTypeCreateManyInput = {
    id?: number
    tename: string
    description: string
  }

  export type TaskTypeUpdateManyMutationInput = {
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowCreateInput = {
    wwname: string
    description: string
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    context?: string | null
    tasks?: taskCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: number
    wwname: string
    description: string
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    context?: string | null
    tasks?: taskUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: taskUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: taskUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: number
    wwname: string
    description: string
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    context?: string | null
  }

  export type WorkflowUpdateManyMutationInput = {
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskCreateInput = {
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
    tasktype: TaskTypeCreateNestedOneWithoutTasksInput
    codelang: CodeLangCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
  }

  export type taskUncheckedCreateInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskUpdateInput = {
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
    tasktype?: TaskTypeUpdateOneRequiredWithoutTasksNestedInput
    codelang?: CodeLangUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskCreateManyInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskUpdateManyMutationInput = {
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppTypeCreateInput = {
    aename: string
    description?: string
    applications?: ApplicationCreateNestedManyWithoutApptypeInput
  }

  export type AppTypeUncheckedCreateInput = {
    id?: number
    aename: string
    description?: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApptypeInput
  }

  export type AppTypeUpdateInput = {
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUpdateManyWithoutApptypeNestedInput
  }

  export type AppTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUncheckedUpdateManyWithoutApptypeNestedInput
  }

  export type AppTypeCreateManyInput = {
    id?: number
    aename: string
    description?: string
  }

  export type AppTypeUpdateManyMutationInput = {
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AppTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
    apptype: AppTypeCreateNestedOneWithoutApplicationsInput
    codelang: CodeLangCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    apptypeId: number
    codelangId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type ApplicationUpdateInput = {
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    apptype?: AppTypeUpdateOneRequiredWithoutApplicationsNestedInput
    codelang?: CodeLangUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: number
    apptypeId: number
    codelangId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeLangCountOrderByAggregateInput = {
    id?: SortOrder
    cgname?: SortOrder
    description?: SortOrder
  }

  export type CodeLangAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodeLangMaxOrderByAggregateInput = {
    id?: SortOrder
    cgname?: SortOrder
    description?: SortOrder
  }

  export type CodeLangMinOrderByAggregateInput = {
    id?: SortOrder
    cgname?: SortOrder
    description?: SortOrder
  }

  export type CodeLangSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TaskTypeCountOrderByAggregateInput = {
    id?: SortOrder
    tename?: SortOrder
    description?: SortOrder
  }

  export type TaskTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    tename?: SortOrder
    description?: SortOrder
  }

  export type TaskTypeMinOrderByAggregateInput = {
    id?: SortOrder
    tename?: SortOrder
    description?: SortOrder
  }

  export type TaskTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    wwname?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
    context?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    wwname?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
    context?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    wwname?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
    context?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskTypeScalarRelationFilter = {
    is?: TaskTypeWhereInput
    isNot?: TaskTypeWhereInput
  }

  export type CodeLangScalarRelationFilter = {
    is?: CodeLangWhereInput
    isNot?: CodeLangWhereInput
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
    tkname?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
    final?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
    tkname?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
    final?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
    tkname?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
    final?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    orden?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AppTypeCountOrderByAggregateInput = {
    id?: SortOrder
    aename?: SortOrder
    description?: SortOrder
  }

  export type AppTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    aename?: SortOrder
    description?: SortOrder
  }

  export type AppTypeMinOrderByAggregateInput = {
    id?: SortOrder
    aename?: SortOrder
    description?: SortOrder
  }

  export type AppTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppTypeScalarRelationFilter = {
    is?: AppTypeWhereInput
    isNot?: AppTypeWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    anname?: SortOrder
    description?: SortOrder
    repository?: SortOrder
    author?: SortOrder
    osystem?: SortOrder
    appurl?: SortOrder
    apppath?: SortOrder
    localdev?: SortOrder
    usedocker?: SortOrder
    controlusers?: SortOrder
    useui?: SortOrder
    useagents?: SortOrder
    consumedb?: SortOrder
    consumeapi?: SortOrder
    consumeai?: SortOrder
    exposedb?: SortOrder
    exposeapi?: SortOrder
    updated?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    anname?: SortOrder
    description?: SortOrder
    repository?: SortOrder
    author?: SortOrder
    osystem?: SortOrder
    appurl?: SortOrder
    apppath?: SortOrder
    localdev?: SortOrder
    usedocker?: SortOrder
    controlusers?: SortOrder
    useui?: SortOrder
    useagents?: SortOrder
    consumedb?: SortOrder
    consumeapi?: SortOrder
    consumeai?: SortOrder
    exposedb?: SortOrder
    exposeapi?: SortOrder
    updated?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    anname?: SortOrder
    description?: SortOrder
    repository?: SortOrder
    author?: SortOrder
    osystem?: SortOrder
    appurl?: SortOrder
    apppath?: SortOrder
    localdev?: SortOrder
    usedocker?: SortOrder
    controlusers?: SortOrder
    useui?: SortOrder
    useagents?: SortOrder
    consumedb?: SortOrder
    consumeapi?: SortOrder
    consumeai?: SortOrder
    exposedb?: SortOrder
    exposeapi?: SortOrder
    updated?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
  }

  export type taskCreateNestedManyWithoutCodelangInput = {
    create?: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput> | taskCreateWithoutCodelangInput[] | taskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCodelangInput | taskCreateOrConnectWithoutCodelangInput[]
    createMany?: taskCreateManyCodelangInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCodelangInput = {
    create?: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput> | ApplicationCreateWithoutCodelangInput[] | ApplicationUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCodelangInput | ApplicationCreateOrConnectWithoutCodelangInput[]
    createMany?: ApplicationCreateManyCodelangInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutCodelangInput = {
    create?: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput> | taskCreateWithoutCodelangInput[] | taskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCodelangInput | taskCreateOrConnectWithoutCodelangInput[]
    createMany?: taskCreateManyCodelangInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCodelangInput = {
    create?: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput> | ApplicationCreateWithoutCodelangInput[] | ApplicationUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCodelangInput | ApplicationCreateOrConnectWithoutCodelangInput[]
    createMany?: ApplicationCreateManyCodelangInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type taskUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput> | taskCreateWithoutCodelangInput[] | taskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCodelangInput | taskCreateOrConnectWithoutCodelangInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutCodelangInput | taskUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: taskCreateManyCodelangInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutCodelangInput | taskUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: taskUpdateManyWithWhereWithoutCodelangInput | taskUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput> | ApplicationCreateWithoutCodelangInput[] | ApplicationUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCodelangInput | ApplicationCreateOrConnectWithoutCodelangInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCodelangInput | ApplicationUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: ApplicationCreateManyCodelangInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCodelangInput | ApplicationUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCodelangInput | ApplicationUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type taskUncheckedUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput> | taskCreateWithoutCodelangInput[] | taskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCodelangInput | taskCreateOrConnectWithoutCodelangInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutCodelangInput | taskUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: taskCreateManyCodelangInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutCodelangInput | taskUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: taskUpdateManyWithWhereWithoutCodelangInput | taskUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput> | ApplicationCreateWithoutCodelangInput[] | ApplicationUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCodelangInput | ApplicationCreateOrConnectWithoutCodelangInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCodelangInput | ApplicationUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: ApplicationCreateManyCodelangInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCodelangInput | ApplicationUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCodelangInput | ApplicationUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type taskCreateNestedManyWithoutTasktypeInput = {
    create?: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput> | taskCreateWithoutTasktypeInput[] | taskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTasktypeInput | taskCreateOrConnectWithoutTasktypeInput[]
    createMany?: taskCreateManyTasktypeInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutTasktypeInput = {
    create?: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput> | taskCreateWithoutTasktypeInput[] | taskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTasktypeInput | taskCreateOrConnectWithoutTasktypeInput[]
    createMany?: taskCreateManyTasktypeInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUpdateManyWithoutTasktypeNestedInput = {
    create?: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput> | taskCreateWithoutTasktypeInput[] | taskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTasktypeInput | taskCreateOrConnectWithoutTasktypeInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTasktypeInput | taskUpsertWithWhereUniqueWithoutTasktypeInput[]
    createMany?: taskCreateManyTasktypeInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTasktypeInput | taskUpdateWithWhereUniqueWithoutTasktypeInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTasktypeInput | taskUpdateManyWithWhereWithoutTasktypeInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutTasktypeNestedInput = {
    create?: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput> | taskCreateWithoutTasktypeInput[] | taskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTasktypeInput | taskCreateOrConnectWithoutTasktypeInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTasktypeInput | taskUpsertWithWhereUniqueWithoutTasktypeInput[]
    createMany?: taskCreateManyTasktypeInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTasktypeInput | taskUpdateWithWhereUniqueWithoutTasktypeInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTasktypeInput | taskUpdateManyWithWhereWithoutTasktypeInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput> | taskCreateWithoutWorkflowInput[] | taskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: taskCreateOrConnectWithoutWorkflowInput | taskCreateOrConnectWithoutWorkflowInput[]
    createMany?: taskCreateManyWorkflowInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput> | taskCreateWithoutWorkflowInput[] | taskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: taskCreateOrConnectWithoutWorkflowInput | taskCreateOrConnectWithoutWorkflowInput[]
    createMany?: taskCreateManyWorkflowInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type taskUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput> | taskCreateWithoutWorkflowInput[] | taskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: taskCreateOrConnectWithoutWorkflowInput | taskCreateOrConnectWithoutWorkflowInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutWorkflowInput | taskUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: taskCreateManyWorkflowInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutWorkflowInput | taskUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: taskUpdateManyWithWhereWithoutWorkflowInput | taskUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput> | taskCreateWithoutWorkflowInput[] | taskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: taskCreateOrConnectWithoutWorkflowInput | taskCreateOrConnectWithoutWorkflowInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutWorkflowInput | taskUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: taskCreateManyWorkflowInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutWorkflowInput | taskUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: taskUpdateManyWithWhereWithoutWorkflowInput | taskUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type TaskTypeCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskTypeCreateWithoutTasksInput, TaskTypeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskTypeCreateOrConnectWithoutTasksInput
    connect?: TaskTypeWhereUniqueInput
  }

  export type CodeLangCreateNestedOneWithoutTasksInput = {
    create?: XOR<CodeLangCreateWithoutTasksInput, CodeLangUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CodeLangCreateOrConnectWithoutTasksInput
    connect?: CodeLangWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTasksInput
    connect?: WorkflowWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskTypeUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TaskTypeCreateWithoutTasksInput, TaskTypeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskTypeCreateOrConnectWithoutTasksInput
    upsert?: TaskTypeUpsertWithoutTasksInput
    connect?: TaskTypeWhereUniqueInput
    update?: XOR<XOR<TaskTypeUpdateToOneWithWhereWithoutTasksInput, TaskTypeUpdateWithoutTasksInput>, TaskTypeUncheckedUpdateWithoutTasksInput>
  }

  export type CodeLangUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CodeLangCreateWithoutTasksInput, CodeLangUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CodeLangCreateOrConnectWithoutTasksInput
    upsert?: CodeLangUpsertWithoutTasksInput
    connect?: CodeLangWhereUniqueInput
    update?: XOR<XOR<CodeLangUpdateToOneWithWhereWithoutTasksInput, CodeLangUpdateWithoutTasksInput>, CodeLangUncheckedUpdateWithoutTasksInput>
  }

  export type WorkflowUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTasksInput
    upsert?: WorkflowUpsertWithoutTasksInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTasksInput, WorkflowUpdateWithoutTasksInput>, WorkflowUncheckedUpdateWithoutTasksInput>
  }

  export type ApplicationCreateNestedManyWithoutApptypeInput = {
    create?: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput> | ApplicationCreateWithoutApptypeInput[] | ApplicationUncheckedCreateWithoutApptypeInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApptypeInput | ApplicationCreateOrConnectWithoutApptypeInput[]
    createMany?: ApplicationCreateManyApptypeInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApptypeInput = {
    create?: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput> | ApplicationCreateWithoutApptypeInput[] | ApplicationUncheckedCreateWithoutApptypeInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApptypeInput | ApplicationCreateOrConnectWithoutApptypeInput[]
    createMany?: ApplicationCreateManyApptypeInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUpdateManyWithoutApptypeNestedInput = {
    create?: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput> | ApplicationCreateWithoutApptypeInput[] | ApplicationUncheckedCreateWithoutApptypeInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApptypeInput | ApplicationCreateOrConnectWithoutApptypeInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApptypeInput | ApplicationUpsertWithWhereUniqueWithoutApptypeInput[]
    createMany?: ApplicationCreateManyApptypeInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApptypeInput | ApplicationUpdateWithWhereUniqueWithoutApptypeInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApptypeInput | ApplicationUpdateManyWithWhereWithoutApptypeInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutApptypeNestedInput = {
    create?: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput> | ApplicationCreateWithoutApptypeInput[] | ApplicationUncheckedCreateWithoutApptypeInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApptypeInput | ApplicationCreateOrConnectWithoutApptypeInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApptypeInput | ApplicationUpsertWithWhereUniqueWithoutApptypeInput[]
    createMany?: ApplicationCreateManyApptypeInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApptypeInput | ApplicationUpdateWithWhereUniqueWithoutApptypeInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApptypeInput | ApplicationUpdateManyWithWhereWithoutApptypeInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AppTypeCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<AppTypeCreateWithoutApplicationsInput, AppTypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: AppTypeCreateOrConnectWithoutApplicationsInput
    connect?: AppTypeWhereUniqueInput
  }

  export type CodeLangCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CodeLangCreateWithoutApplicationsInput, CodeLangUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CodeLangCreateOrConnectWithoutApplicationsInput
    connect?: CodeLangWhereUniqueInput
  }

  export type AppTypeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<AppTypeCreateWithoutApplicationsInput, AppTypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: AppTypeCreateOrConnectWithoutApplicationsInput
    upsert?: AppTypeUpsertWithoutApplicationsInput
    connect?: AppTypeWhereUniqueInput
    update?: XOR<XOR<AppTypeUpdateToOneWithWhereWithoutApplicationsInput, AppTypeUpdateWithoutApplicationsInput>, AppTypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type CodeLangUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CodeLangCreateWithoutApplicationsInput, CodeLangUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CodeLangCreateOrConnectWithoutApplicationsInput
    upsert?: CodeLangUpsertWithoutApplicationsInput
    connect?: CodeLangWhereUniqueInput
    update?: XOR<XOR<CodeLangUpdateToOneWithWhereWithoutApplicationsInput, CodeLangUpdateWithoutApplicationsInput>, CodeLangUncheckedUpdateWithoutApplicationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type taskCreateWithoutCodelangInput = {
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
    tasktype: TaskTypeCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
  }

  export type taskUncheckedCreateWithoutCodelangInput = {
    id?: number
    tasktypeId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskCreateOrConnectWithoutCodelangInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput>
  }

  export type taskCreateManyCodelangInputEnvelope = {
    data: taskCreateManyCodelangInput | taskCreateManyCodelangInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCodelangInput = {
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
    apptype: AppTypeCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCodelangInput = {
    id?: number
    apptypeId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutCodelangInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput>
  }

  export type ApplicationCreateManyCodelangInputEnvelope = {
    data: ApplicationCreateManyCodelangInput | ApplicationCreateManyCodelangInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutCodelangInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutCodelangInput, taskUncheckedUpdateWithoutCodelangInput>
    create: XOR<taskCreateWithoutCodelangInput, taskUncheckedCreateWithoutCodelangInput>
  }

  export type taskUpdateWithWhereUniqueWithoutCodelangInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutCodelangInput, taskUncheckedUpdateWithoutCodelangInput>
  }

  export type taskUpdateManyWithWhereWithoutCodelangInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutCodelangInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: IntFilter<"task"> | number
    tasktypeId?: IntFilter<"task"> | number
    codelangId?: IntFilter<"task"> | number
    workflowId?: IntFilter<"task"> | number
    orden?: IntFilter<"task"> | number
    tkname?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    files?: StringNullableFilter<"task"> | string | null
    folders?: StringNullableFilter<"task"> | string | null
    final?: BoolFilter<"task"> | boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCodelangInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCodelangInput, ApplicationUncheckedUpdateWithoutCodelangInput>
    create: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCodelangInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCodelangInput, ApplicationUncheckedUpdateWithoutCodelangInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCodelangInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCodelangInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    apptypeId?: IntFilter<"Application"> | number
    codelangId?: IntFilter<"Application"> | number
    anname?: StringFilter<"Application"> | string
    description?: StringFilter<"Application"> | string
    repository?: StringFilter<"Application"> | string
    author?: StringNullableFilter<"Application"> | string | null
    osystem?: StringNullableFilter<"Application"> | string | null
    appurl?: StringNullableFilter<"Application"> | string | null
    apppath?: StringNullableFilter<"Application"> | string | null
    localdev?: BoolFilter<"Application"> | boolean
    usedocker?: BoolFilter<"Application"> | boolean
    controlusers?: BoolFilter<"Application"> | boolean
    useui?: BoolFilter<"Application"> | boolean
    useagents?: BoolFilter<"Application"> | boolean
    consumedb?: BoolFilter<"Application"> | boolean
    consumeapi?: BoolFilter<"Application"> | boolean
    consumeai?: BoolFilter<"Application"> | boolean
    exposedb?: BoolFilter<"Application"> | boolean
    exposeapi?: BoolFilter<"Application"> | boolean
    updated?: DateTimeFilter<"Application"> | Date | string
  }

  export type taskCreateWithoutTasktypeInput = {
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
    codelang: CodeLangCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
  }

  export type taskUncheckedCreateWithoutTasktypeInput = {
    id?: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskCreateOrConnectWithoutTasktypeInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput>
  }

  export type taskCreateManyTasktypeInputEnvelope = {
    data: taskCreateManyTasktypeInput | taskCreateManyTasktypeInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutTasktypeInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutTasktypeInput, taskUncheckedUpdateWithoutTasktypeInput>
    create: XOR<taskCreateWithoutTasktypeInput, taskUncheckedCreateWithoutTasktypeInput>
  }

  export type taskUpdateWithWhereUniqueWithoutTasktypeInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutTasktypeInput, taskUncheckedUpdateWithoutTasktypeInput>
  }

  export type taskUpdateManyWithWhereWithoutTasktypeInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutTasktypeInput>
  }

  export type taskCreateWithoutWorkflowInput = {
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
    tasktype: TaskTypeCreateNestedOneWithoutTasksInput
    codelang: CodeLangCreateNestedOneWithoutTasksInput
  }

  export type taskUncheckedCreateWithoutWorkflowInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskCreateOrConnectWithoutWorkflowInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput>
  }

  export type taskCreateManyWorkflowInputEnvelope = {
    data: taskCreateManyWorkflowInput | taskCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutWorkflowInput, taskUncheckedUpdateWithoutWorkflowInput>
    create: XOR<taskCreateWithoutWorkflowInput, taskUncheckedCreateWithoutWorkflowInput>
  }

  export type taskUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutWorkflowInput, taskUncheckedUpdateWithoutWorkflowInput>
  }

  export type taskUpdateManyWithWhereWithoutWorkflowInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type TaskTypeCreateWithoutTasksInput = {
    tename: string
    description: string
  }

  export type TaskTypeUncheckedCreateWithoutTasksInput = {
    id?: number
    tename: string
    description: string
  }

  export type TaskTypeCreateOrConnectWithoutTasksInput = {
    where: TaskTypeWhereUniqueInput
    create: XOR<TaskTypeCreateWithoutTasksInput, TaskTypeUncheckedCreateWithoutTasksInput>
  }

  export type CodeLangCreateWithoutTasksInput = {
    cgname: string
    description: string
    applications?: ApplicationCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangUncheckedCreateWithoutTasksInput = {
    id?: number
    cgname: string
    description: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangCreateOrConnectWithoutTasksInput = {
    where: CodeLangWhereUniqueInput
    create: XOR<CodeLangCreateWithoutTasksInput, CodeLangUncheckedCreateWithoutTasksInput>
  }

  export type WorkflowCreateWithoutTasksInput = {
    wwname: string
    description: string
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    context?: string | null
  }

  export type WorkflowUncheckedCreateWithoutTasksInput = {
    id?: number
    wwname: string
    description: string
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    context?: string | null
  }

  export type WorkflowCreateOrConnectWithoutTasksInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
  }

  export type TaskTypeUpsertWithoutTasksInput = {
    update: XOR<TaskTypeUpdateWithoutTasksInput, TaskTypeUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskTypeCreateWithoutTasksInput, TaskTypeUncheckedCreateWithoutTasksInput>
    where?: TaskTypeWhereInput
  }

  export type TaskTypeUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskTypeWhereInput
    data: XOR<TaskTypeUpdateWithoutTasksInput, TaskTypeUncheckedUpdateWithoutTasksInput>
  }

  export type TaskTypeUpdateWithoutTasksInput = {
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTypeUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    tename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLangUpsertWithoutTasksInput = {
    update: XOR<CodeLangUpdateWithoutTasksInput, CodeLangUncheckedUpdateWithoutTasksInput>
    create: XOR<CodeLangCreateWithoutTasksInput, CodeLangUncheckedCreateWithoutTasksInput>
    where?: CodeLangWhereInput
  }

  export type CodeLangUpdateToOneWithWhereWithoutTasksInput = {
    where?: CodeLangWhereInput
    data: XOR<CodeLangUpdateWithoutTasksInput, CodeLangUncheckedUpdateWithoutTasksInput>
  }

  export type CodeLangUpdateWithoutTasksInput = {
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUpdateManyWithoutCodelangNestedInput
  }

  export type CodeLangUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUncheckedUpdateManyWithoutCodelangNestedInput
  }

  export type WorkflowUpsertWithoutTasksInput = {
    update: XOR<WorkflowUpdateWithoutTasksInput, WorkflowUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTasksInput, WorkflowUncheckedUpdateWithoutTasksInput>
  }

  export type WorkflowUpdateWithoutTasksInput = {
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    wwname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateWithoutApptypeInput = {
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
    codelang: CodeLangCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApptypeInput = {
    id?: number
    codelangId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutApptypeInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput>
  }

  export type ApplicationCreateManyApptypeInputEnvelope = {
    data: ApplicationCreateManyApptypeInput | ApplicationCreateManyApptypeInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApptypeInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApptypeInput, ApplicationUncheckedUpdateWithoutApptypeInput>
    create: XOR<ApplicationCreateWithoutApptypeInput, ApplicationUncheckedCreateWithoutApptypeInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApptypeInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApptypeInput, ApplicationUncheckedUpdateWithoutApptypeInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApptypeInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApptypeInput>
  }

  export type AppTypeCreateWithoutApplicationsInput = {
    aename: string
    description?: string
  }

  export type AppTypeUncheckedCreateWithoutApplicationsInput = {
    id?: number
    aename: string
    description?: string
  }

  export type AppTypeCreateOrConnectWithoutApplicationsInput = {
    where: AppTypeWhereUniqueInput
    create: XOR<AppTypeCreateWithoutApplicationsInput, AppTypeUncheckedCreateWithoutApplicationsInput>
  }

  export type CodeLangCreateWithoutApplicationsInput = {
    cgname: string
    description: string
    tasks?: taskCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangUncheckedCreateWithoutApplicationsInput = {
    id?: number
    cgname: string
    description: string
    tasks?: taskUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodeLangCreateOrConnectWithoutApplicationsInput = {
    where: CodeLangWhereUniqueInput
    create: XOR<CodeLangCreateWithoutApplicationsInput, CodeLangUncheckedCreateWithoutApplicationsInput>
  }

  export type AppTypeUpsertWithoutApplicationsInput = {
    update: XOR<AppTypeUpdateWithoutApplicationsInput, AppTypeUncheckedUpdateWithoutApplicationsInput>
    create: XOR<AppTypeCreateWithoutApplicationsInput, AppTypeUncheckedCreateWithoutApplicationsInput>
    where?: AppTypeWhereInput
  }

  export type AppTypeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: AppTypeWhereInput
    data: XOR<AppTypeUpdateWithoutApplicationsInput, AppTypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type AppTypeUpdateWithoutApplicationsInput = {
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AppTypeUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    aename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLangUpsertWithoutApplicationsInput = {
    update: XOR<CodeLangUpdateWithoutApplicationsInput, CodeLangUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CodeLangCreateWithoutApplicationsInput, CodeLangUncheckedCreateWithoutApplicationsInput>
    where?: CodeLangWhereInput
  }

  export type CodeLangUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CodeLangWhereInput
    data: XOR<CodeLangUpdateWithoutApplicationsInput, CodeLangUncheckedUpdateWithoutApplicationsInput>
  }

  export type CodeLangUpdateWithoutApplicationsInput = {
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutCodelangNestedInput
  }

  export type CodeLangUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: taskUncheckedUpdateManyWithoutCodelangNestedInput
  }

  export type taskCreateManyCodelangInput = {
    id?: number
    tasktypeId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type ApplicationCreateManyCodelangInput = {
    id?: number
    apptypeId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type taskUpdateWithoutCodelangInput = {
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
    tasktype?: TaskTypeUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
  }

  export type taskUncheckedUpdateWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationUpdateWithoutCodelangInput = {
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    apptype?: AppTypeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskCreateManyTasktypeInput = {
    id?: number
    codelangId: number
    workflowId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskUpdateWithoutTasktypeInput = {
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
    codelang?: CodeLangUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
  }

  export type taskUncheckedUpdateWithoutTasktypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyWithoutTasktypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskCreateManyWorkflowInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    orden: number
    tkname: string
    description?: string | null
    files?: string | null
    folders?: string | null
    final?: boolean
  }

  export type taskUpdateWithoutWorkflowInput = {
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
    tasktype?: TaskTypeUpdateOneRequiredWithoutTasksNestedInput
    codelang?: CodeLangUpdateOneRequiredWithoutTasksNestedInput
  }

  export type taskUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    tkname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationCreateManyApptypeInput = {
    id?: number
    codelangId: number
    anname: string
    description?: string
    repository?: string
    author?: string | null
    osystem?: string | null
    appurl?: string | null
    apppath?: string | null
    localdev?: boolean
    usedocker?: boolean
    controlusers?: boolean
    useui?: boolean
    useagents?: boolean
    consumedb?: boolean
    consumeapi?: boolean
    consumeai?: boolean
    exposedb?: boolean
    exposeapi?: boolean
    updated?: Date | string
  }

  export type ApplicationUpdateWithoutApptypeInput = {
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    codelang?: CodeLangUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApptypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApptypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    anname?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    osystem?: NullableStringFieldUpdateOperationsInput | string | null
    appurl?: NullableStringFieldUpdateOperationsInput | string | null
    apppath?: NullableStringFieldUpdateOperationsInput | string | null
    localdev?: BoolFieldUpdateOperationsInput | boolean
    usedocker?: BoolFieldUpdateOperationsInput | boolean
    controlusers?: BoolFieldUpdateOperationsInput | boolean
    useui?: BoolFieldUpdateOperationsInput | boolean
    useagents?: BoolFieldUpdateOperationsInput | boolean
    consumedb?: BoolFieldUpdateOperationsInput | boolean
    consumeapi?: BoolFieldUpdateOperationsInput | boolean
    consumeai?: BoolFieldUpdateOperationsInput | boolean
    exposedb?: BoolFieldUpdateOperationsInput | boolean
    exposeapi?: BoolFieldUpdateOperationsInput | boolean
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}