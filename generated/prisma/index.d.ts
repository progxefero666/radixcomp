
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
 * Model Proglanguage
 * 
 */
export type Proglanguage = $Result.DefaultSelection<Prisma.$ProglanguagePayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Taskcategory
 * 
 */
export type Taskcategory = $Result.DefaultSelection<Prisma.$TaskcategoryPayload>
/**
 * Model Tasktype
 * 
 */
export type Tasktype = $Result.DefaultSelection<Prisma.$TasktypePayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proglanguages
 * const proglanguages = await prisma.proglanguage.findMany()
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
   * // Fetch zero or more Proglanguages
   * const proglanguages = await prisma.proglanguage.findMany()
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
   * `prisma.proglanguage`: Exposes CRUD operations for the **Proglanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proglanguages
    * const proglanguages = await prisma.proglanguage.findMany()
    * ```
    */
  get proglanguage(): Prisma.ProglanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskcategory`: Exposes CRUD operations for the **Taskcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taskcategories
    * const taskcategories = await prisma.taskcategory.findMany()
    * ```
    */
  get taskcategory(): Prisma.TaskcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasktype`: Exposes CRUD operations for the **Tasktype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasktypes
    * const tasktypes = await prisma.tasktype.findMany()
    * ```
    */
  get tasktype(): Prisma.TasktypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;
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
    Proglanguage: 'Proglanguage',
    Template: 'Template',
    Task: 'Task',
    Taskcategory: 'Taskcategory',
    Tasktype: 'Tasktype',
    Workflow: 'Workflow'
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
      modelProps: "proglanguage" | "template" | "task" | "taskcategory" | "tasktype" | "workflow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proglanguage: {
        payload: Prisma.$ProglanguagePayload<ExtArgs>
        fields: Prisma.ProglanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProglanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProglanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          findFirst: {
            args: Prisma.ProglanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProglanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          findMany: {
            args: Prisma.ProglanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>[]
          }
          create: {
            args: Prisma.ProglanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          createMany: {
            args: Prisma.ProglanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProglanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>[]
          }
          delete: {
            args: Prisma.ProglanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          update: {
            args: Prisma.ProglanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          deleteMany: {
            args: Prisma.ProglanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProglanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProglanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>[]
          }
          upsert: {
            args: Prisma.ProglanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProglanguagePayload>
          }
          aggregate: {
            args: Prisma.ProglanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProglanguage>
          }
          groupBy: {
            args: Prisma.ProglanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProglanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProglanguageCountArgs<ExtArgs>
            result: $Utils.Optional<ProglanguageCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Taskcategory: {
        payload: Prisma.$TaskcategoryPayload<ExtArgs>
        fields: Prisma.TaskcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          findFirst: {
            args: Prisma.TaskcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          findMany: {
            args: Prisma.TaskcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>[]
          }
          create: {
            args: Prisma.TaskcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          createMany: {
            args: Prisma.TaskcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>[]
          }
          delete: {
            args: Prisma.TaskcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          update: {
            args: Prisma.TaskcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          deleteMany: {
            args: Prisma.TaskcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>[]
          }
          upsert: {
            args: Prisma.TaskcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcategoryPayload>
          }
          aggregate: {
            args: Prisma.TaskcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskcategory>
          }
          groupBy: {
            args: Prisma.TaskcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TaskcategoryCountAggregateOutputType> | number
          }
        }
      }
      Tasktype: {
        payload: Prisma.$TasktypePayload<ExtArgs>
        fields: Prisma.TasktypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasktypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasktypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          findFirst: {
            args: Prisma.TasktypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasktypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          findMany: {
            args: Prisma.TasktypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>[]
          }
          create: {
            args: Prisma.TasktypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          createMany: {
            args: Prisma.TasktypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasktypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>[]
          }
          delete: {
            args: Prisma.TasktypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          update: {
            args: Prisma.TasktypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          deleteMany: {
            args: Prisma.TasktypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasktypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasktypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>[]
          }
          upsert: {
            args: Prisma.TasktypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasktypePayload>
          }
          aggregate: {
            args: Prisma.TasktypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasktype>
          }
          groupBy: {
            args: Prisma.TasktypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasktypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasktypeCountArgs<ExtArgs>
            result: $Utils.Optional<TasktypeCountAggregateOutputType> | number
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
    proglanguage?: ProglanguageOmit
    template?: TemplateOmit
    task?: TaskOmit
    taskcategory?: TaskcategoryOmit
    tasktype?: TasktypeOmit
    workflow?: WorkflowOmit
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
   * Count Type ProglanguageCountOutputType
   */

  export type ProglanguageCountOutputType = {
    task: number
    templates: number
  }

  export type ProglanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ProglanguageCountOutputTypeCountTaskArgs
    templates?: boolean | ProglanguageCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * ProglanguageCountOutputType without action
   */
  export type ProglanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProglanguageCountOutputType
     */
    select?: ProglanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProglanguageCountOutputType without action
   */
  export type ProglanguageCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProglanguageCountOutputType without action
   */
  export type ProglanguageCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type TasktypeCountOutputType
   */

  export type TasktypeCountOutputType = {
    task: number
  }

  export type TasktypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasktypeCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * TasktypeCountOutputType without action
   */
  export type TasktypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasktypeCountOutputType
     */
    select?: TasktypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasktypeCountOutputType without action
   */
  export type TasktypeCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    task: number
    taskcategory: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | WorkflowCountOutputTypeCountTaskArgs
    taskcategory?: boolean | WorkflowCountOutputTypeCountTaskcategoryArgs
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
  export type WorkflowCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountTaskcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Proglanguage
   */

  export type AggregateProglanguage = {
    _count: ProglanguageCountAggregateOutputType | null
    _min: ProglanguageMinAggregateOutputType | null
    _max: ProglanguageMaxAggregateOutputType | null
  }

  export type ProglanguageMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProglanguageMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProglanguageCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProglanguageMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProglanguageMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProglanguageCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProglanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proglanguage to aggregate.
     */
    where?: ProglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proglanguages to fetch.
     */
    orderBy?: ProglanguageOrderByWithRelationInput | ProglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proglanguages
    **/
    _count?: true | ProglanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProglanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProglanguageMaxAggregateInputType
  }

  export type GetProglanguageAggregateType<T extends ProglanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateProglanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProglanguage[P]>
      : GetScalarType<T[P], AggregateProglanguage[P]>
  }




  export type ProglanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProglanguageWhereInput
    orderBy?: ProglanguageOrderByWithAggregationInput | ProglanguageOrderByWithAggregationInput[]
    by: ProglanguageScalarFieldEnum[] | ProglanguageScalarFieldEnum
    having?: ProglanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProglanguageCountAggregateInputType | true
    _min?: ProglanguageMinAggregateInputType
    _max?: ProglanguageMaxAggregateInputType
  }

  export type ProglanguageGroupByOutputType = {
    id: string
    name: string
    _count: ProglanguageCountAggregateOutputType | null
    _min: ProglanguageMinAggregateOutputType | null
    _max: ProglanguageMaxAggregateOutputType | null
  }

  type GetProglanguageGroupByPayload<T extends ProglanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProglanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProglanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProglanguageGroupByOutputType[P]>
            : GetScalarType<T[P], ProglanguageGroupByOutputType[P]>
        }
      >
    >


  export type ProglanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    task?: boolean | Proglanguage$taskArgs<ExtArgs>
    templates?: boolean | Proglanguage$templatesArgs<ExtArgs>
    _count?: boolean | ProglanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proglanguage"]>

  export type ProglanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["proglanguage"]>

  export type ProglanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["proglanguage"]>

  export type ProglanguageSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProglanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["proglanguage"]>
  export type ProglanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Proglanguage$taskArgs<ExtArgs>
    templates?: boolean | Proglanguage$templatesArgs<ExtArgs>
    _count?: boolean | ProglanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProglanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProglanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProglanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proglanguage"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["proglanguage"]>
    composites: {}
  }

  type ProglanguageGetPayload<S extends boolean | null | undefined | ProglanguageDefaultArgs> = $Result.GetResult<Prisma.$ProglanguagePayload, S>

  type ProglanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProglanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProglanguageCountAggregateInputType | true
    }

  export interface ProglanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proglanguage'], meta: { name: 'Proglanguage' } }
    /**
     * Find zero or one Proglanguage that matches the filter.
     * @param {ProglanguageFindUniqueArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProglanguageFindUniqueArgs>(args: SelectSubset<T, ProglanguageFindUniqueArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proglanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProglanguageFindUniqueOrThrowArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProglanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProglanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proglanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageFindFirstArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProglanguageFindFirstArgs>(args?: SelectSubset<T, ProglanguageFindFirstArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proglanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageFindFirstOrThrowArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProglanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProglanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proglanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proglanguages
     * const proglanguages = await prisma.proglanguage.findMany()
     * 
     * // Get first 10 Proglanguages
     * const proglanguages = await prisma.proglanguage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proglanguageWithIdOnly = await prisma.proglanguage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProglanguageFindManyArgs>(args?: SelectSubset<T, ProglanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proglanguage.
     * @param {ProglanguageCreateArgs} args - Arguments to create a Proglanguage.
     * @example
     * // Create one Proglanguage
     * const Proglanguage = await prisma.proglanguage.create({
     *   data: {
     *     // ... data to create a Proglanguage
     *   }
     * })
     * 
     */
    create<T extends ProglanguageCreateArgs>(args: SelectSubset<T, ProglanguageCreateArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proglanguages.
     * @param {ProglanguageCreateManyArgs} args - Arguments to create many Proglanguages.
     * @example
     * // Create many Proglanguages
     * const proglanguage = await prisma.proglanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProglanguageCreateManyArgs>(args?: SelectSubset<T, ProglanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proglanguages and returns the data saved in the database.
     * @param {ProglanguageCreateManyAndReturnArgs} args - Arguments to create many Proglanguages.
     * @example
     * // Create many Proglanguages
     * const proglanguage = await prisma.proglanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proglanguages and only return the `id`
     * const proglanguageWithIdOnly = await prisma.proglanguage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProglanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProglanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proglanguage.
     * @param {ProglanguageDeleteArgs} args - Arguments to delete one Proglanguage.
     * @example
     * // Delete one Proglanguage
     * const Proglanguage = await prisma.proglanguage.delete({
     *   where: {
     *     // ... filter to delete one Proglanguage
     *   }
     * })
     * 
     */
    delete<T extends ProglanguageDeleteArgs>(args: SelectSubset<T, ProglanguageDeleteArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proglanguage.
     * @param {ProglanguageUpdateArgs} args - Arguments to update one Proglanguage.
     * @example
     * // Update one Proglanguage
     * const proglanguage = await prisma.proglanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProglanguageUpdateArgs>(args: SelectSubset<T, ProglanguageUpdateArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proglanguages.
     * @param {ProglanguageDeleteManyArgs} args - Arguments to filter Proglanguages to delete.
     * @example
     * // Delete a few Proglanguages
     * const { count } = await prisma.proglanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProglanguageDeleteManyArgs>(args?: SelectSubset<T, ProglanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proglanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proglanguages
     * const proglanguage = await prisma.proglanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProglanguageUpdateManyArgs>(args: SelectSubset<T, ProglanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proglanguages and returns the data updated in the database.
     * @param {ProglanguageUpdateManyAndReturnArgs} args - Arguments to update many Proglanguages.
     * @example
     * // Update many Proglanguages
     * const proglanguage = await prisma.proglanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proglanguages and only return the `id`
     * const proglanguageWithIdOnly = await prisma.proglanguage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProglanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProglanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proglanguage.
     * @param {ProglanguageUpsertArgs} args - Arguments to update or create a Proglanguage.
     * @example
     * // Update or create a Proglanguage
     * const proglanguage = await prisma.proglanguage.upsert({
     *   create: {
     *     // ... data to create a Proglanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proglanguage we want to update
     *   }
     * })
     */
    upsert<T extends ProglanguageUpsertArgs>(args: SelectSubset<T, ProglanguageUpsertArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proglanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageCountArgs} args - Arguments to filter Proglanguages to count.
     * @example
     * // Count the number of Proglanguages
     * const count = await prisma.proglanguage.count({
     *   where: {
     *     // ... the filter for the Proglanguages we want to count
     *   }
     * })
    **/
    count<T extends ProglanguageCountArgs>(
      args?: Subset<T, ProglanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProglanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proglanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProglanguageAggregateArgs>(args: Subset<T, ProglanguageAggregateArgs>): Prisma.PrismaPromise<GetProglanguageAggregateType<T>>

    /**
     * Group by Proglanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProglanguageGroupByArgs} args - Group by arguments.
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
      T extends ProglanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProglanguageGroupByArgs['orderBy'] }
        : { orderBy?: ProglanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProglanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProglanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proglanguage model
   */
  readonly fields: ProglanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proglanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProglanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends Proglanguage$taskArgs<ExtArgs> = {}>(args?: Subset<T, Proglanguage$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Proglanguage$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Proglanguage$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proglanguage model
   */
  interface ProglanguageFieldRefs {
    readonly id: FieldRef<"Proglanguage", 'String'>
    readonly name: FieldRef<"Proglanguage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proglanguage findUnique
   */
  export type ProglanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter, which Proglanguage to fetch.
     */
    where: ProglanguageWhereUniqueInput
  }

  /**
   * Proglanguage findUniqueOrThrow
   */
  export type ProglanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter, which Proglanguage to fetch.
     */
    where: ProglanguageWhereUniqueInput
  }

  /**
   * Proglanguage findFirst
   */
  export type ProglanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter, which Proglanguage to fetch.
     */
    where?: ProglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proglanguages to fetch.
     */
    orderBy?: ProglanguageOrderByWithRelationInput | ProglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proglanguages.
     */
    cursor?: ProglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proglanguages.
     */
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * Proglanguage findFirstOrThrow
   */
  export type ProglanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter, which Proglanguage to fetch.
     */
    where?: ProglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proglanguages to fetch.
     */
    orderBy?: ProglanguageOrderByWithRelationInput | ProglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proglanguages.
     */
    cursor?: ProglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proglanguages.
     */
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * Proglanguage findMany
   */
  export type ProglanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter, which Proglanguages to fetch.
     */
    where?: ProglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proglanguages to fetch.
     */
    orderBy?: ProglanguageOrderByWithRelationInput | ProglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proglanguages.
     */
    cursor?: ProglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proglanguages.
     */
    skip?: number
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * Proglanguage create
   */
  export type ProglanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Proglanguage.
     */
    data: XOR<ProglanguageCreateInput, ProglanguageUncheckedCreateInput>
  }

  /**
   * Proglanguage createMany
   */
  export type ProglanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proglanguages.
     */
    data: ProglanguageCreateManyInput | ProglanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proglanguage createManyAndReturn
   */
  export type ProglanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Proglanguages.
     */
    data: ProglanguageCreateManyInput | ProglanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proglanguage update
   */
  export type ProglanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Proglanguage.
     */
    data: XOR<ProglanguageUpdateInput, ProglanguageUncheckedUpdateInput>
    /**
     * Choose, which Proglanguage to update.
     */
    where: ProglanguageWhereUniqueInput
  }

  /**
   * Proglanguage updateMany
   */
  export type ProglanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proglanguages.
     */
    data: XOR<ProglanguageUpdateManyMutationInput, ProglanguageUncheckedUpdateManyInput>
    /**
     * Filter which Proglanguages to update
     */
    where?: ProglanguageWhereInput
    /**
     * Limit how many Proglanguages to update.
     */
    limit?: number
  }

  /**
   * Proglanguage updateManyAndReturn
   */
  export type ProglanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * The data used to update Proglanguages.
     */
    data: XOR<ProglanguageUpdateManyMutationInput, ProglanguageUncheckedUpdateManyInput>
    /**
     * Filter which Proglanguages to update
     */
    where?: ProglanguageWhereInput
    /**
     * Limit how many Proglanguages to update.
     */
    limit?: number
  }

  /**
   * Proglanguage upsert
   */
  export type ProglanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Proglanguage to update in case it exists.
     */
    where: ProglanguageWhereUniqueInput
    /**
     * In case the Proglanguage found by the `where` argument doesn't exist, create a new Proglanguage with this data.
     */
    create: XOR<ProglanguageCreateInput, ProglanguageUncheckedCreateInput>
    /**
     * In case the Proglanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProglanguageUpdateInput, ProglanguageUncheckedUpdateInput>
  }

  /**
   * Proglanguage delete
   */
  export type ProglanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
    /**
     * Filter which Proglanguage to delete.
     */
    where: ProglanguageWhereUniqueInput
  }

  /**
   * Proglanguage deleteMany
   */
  export type ProglanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proglanguages to delete
     */
    where?: ProglanguageWhereInput
    /**
     * Limit how many Proglanguages to delete.
     */
    limit?: number
  }

  /**
   * Proglanguage.task
   */
  export type Proglanguage$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Proglanguage.templates
   */
  export type Proglanguage$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Proglanguage without action
   */
  export type ProglanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proglanguage
     */
    select?: ProglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proglanguage
     */
    omit?: ProglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProglanguageInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    proglanguage_id: string | null
    datacode: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    proglanguage_id: string | null
    datacode: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    proglanguage_id: number
    datacode: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    proglanguage_id?: true
    datacode?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    proglanguage_id?: true
    datacode?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    proglanguage_id?: true
    datacode?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    proglanguage_id: string
    datacode: string
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "proglanguage_id" | "datacode", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      proglanguage: Prisma.$ProglanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      proglanguage_id: string
      datacode: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proglanguage<T extends ProglanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProglanguageDefaultArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly proglanguage_id: FieldRef<"Template", 'String'>
    readonly datacode: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    taskcategory_id: number | null
    orden: number | null
    tkgroup: number | null
  }

  export type TaskSumAggregateOutputType = {
    taskcategory_id: number | null
    orden: number | null
    tkgroup: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    proglanguage_id: string | null
    tasktype_id: string | null
    workflow_id: string | null
    taskcategory_id: number | null
    orden: number | null
    name: string | null
    tkgroup: number | null
    description: string | null
    files: string | null
    folders: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    proglanguage_id: string | null
    tasktype_id: string | null
    workflow_id: string | null
    taskcategory_id: number | null
    orden: number | null
    name: string | null
    tkgroup: number | null
    description: string | null
    files: string | null
    folders: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    proglanguage_id: number
    tasktype_id: number
    workflow_id: number
    taskcategory_id: number
    orden: number
    name: number
    tkgroup: number
    description: number
    files: number
    folders: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    taskcategory_id?: true
    orden?: true
    tkgroup?: true
  }

  export type TaskSumAggregateInputType = {
    taskcategory_id?: true
    orden?: true
    tkgroup?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    proglanguage_id?: true
    tasktype_id?: true
    workflow_id?: true
    taskcategory_id?: true
    orden?: true
    name?: true
    tkgroup?: true
    description?: true
    files?: true
    folders?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    proglanguage_id?: true
    tasktype_id?: true
    workflow_id?: true
    taskcategory_id?: true
    orden?: true
    name?: true
    tkgroup?: true
    description?: true
    files?: true
    folders?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    proglanguage_id?: true
    tasktype_id?: true
    workflow_id?: true
    taskcategory_id?: true
    orden?: true
    name?: true
    tkgroup?: true
    description?: true
    files?: true
    folders?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
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




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    proglanguage_id: string
    tasktype_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description: string | null
    files: string | null
    folders: string | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
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


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proglanguage_id?: boolean
    tasktype_id?: boolean
    workflow_id?: boolean
    taskcategory_id?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proglanguage_id?: boolean
    tasktype_id?: boolean
    workflow_id?: boolean
    taskcategory_id?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proglanguage_id?: boolean
    tasktype_id?: boolean
    workflow_id?: boolean
    taskcategory_id?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    proglanguage_id?: boolean
    tasktype_id?: boolean
    workflow_id?: boolean
    taskcategory_id?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proglanguage_id" | "tasktype_id" | "workflow_id" | "taskcategory_id" | "orden" | "name" | "tkgroup" | "description" | "files" | "folders", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | ProglanguageDefaultArgs<ExtArgs>
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      proglanguage: Prisma.$ProglanguagePayload<ExtArgs>
      tasktype: Prisma.$TasktypePayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proglanguage_id: string
      tasktype_id: string
      workflow_id: string
      taskcategory_id: number
      orden: number
      name: string
      tkgroup: number
      description: string | null
      files: string | null
      folders: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
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
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
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
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
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
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
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
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proglanguage<T extends ProglanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProglanguageDefaultArgs<ExtArgs>>): Prisma__ProglanguageClient<$Result.GetResult<Prisma.$ProglanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasktype<T extends TasktypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasktypeDefaultArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly proglanguage_id: FieldRef<"Task", 'String'>
    readonly tasktype_id: FieldRef<"Task", 'String'>
    readonly workflow_id: FieldRef<"Task", 'String'>
    readonly taskcategory_id: FieldRef<"Task", 'Int'>
    readonly orden: FieldRef<"Task", 'Int'>
    readonly name: FieldRef<"Task", 'String'>
    readonly tkgroup: FieldRef<"Task", 'Int'>
    readonly description: FieldRef<"Task", 'String'>
    readonly files: FieldRef<"Task", 'String'>
    readonly folders: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Taskcategory
   */

  export type AggregateTaskcategory = {
    _count: TaskcategoryCountAggregateOutputType | null
    _min: TaskcategoryMinAggregateOutputType | null
    _max: TaskcategoryMaxAggregateOutputType | null
  }

  export type TaskcategoryMinAggregateOutputType = {
    id: string | null
    workflow_id: string | null
    name: string | null
    description: string | null
  }

  export type TaskcategoryMaxAggregateOutputType = {
    id: string | null
    workflow_id: string | null
    name: string | null
    description: string | null
  }

  export type TaskcategoryCountAggregateOutputType = {
    id: number
    workflow_id: number
    name: number
    description: number
    _all: number
  }


  export type TaskcategoryMinAggregateInputType = {
    id?: true
    workflow_id?: true
    name?: true
    description?: true
  }

  export type TaskcategoryMaxAggregateInputType = {
    id?: true
    workflow_id?: true
    name?: true
    description?: true
  }

  export type TaskcategoryCountAggregateInputType = {
    id?: true
    workflow_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TaskcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taskcategory to aggregate.
     */
    where?: TaskcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcategories to fetch.
     */
    orderBy?: TaskcategoryOrderByWithRelationInput | TaskcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taskcategories
    **/
    _count?: true | TaskcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskcategoryMaxAggregateInputType
  }

  export type GetTaskcategoryAggregateType<T extends TaskcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskcategory[P]>
      : GetScalarType<T[P], AggregateTaskcategory[P]>
  }




  export type TaskcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcategoryWhereInput
    orderBy?: TaskcategoryOrderByWithAggregationInput | TaskcategoryOrderByWithAggregationInput[]
    by: TaskcategoryScalarFieldEnum[] | TaskcategoryScalarFieldEnum
    having?: TaskcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskcategoryCountAggregateInputType | true
    _min?: TaskcategoryMinAggregateInputType
    _max?: TaskcategoryMaxAggregateInputType
  }

  export type TaskcategoryGroupByOutputType = {
    id: string
    workflow_id: string
    name: string
    description: string | null
    _count: TaskcategoryCountAggregateOutputType | null
    _min: TaskcategoryMinAggregateOutputType | null
    _max: TaskcategoryMaxAggregateOutputType | null
  }

  type GetTaskcategoryGroupByPayload<T extends TaskcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TaskcategoryGroupByOutputType[P]>
        }
      >
    >


  export type TaskcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectScalar = {
    id?: boolean
    workflow_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type TaskcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflow_id" | "name" | "description", ExtArgs["result"]["taskcategory"]>
  export type TaskcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type TaskcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type TaskcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $TaskcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taskcategory"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflow_id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["taskcategory"]>
    composites: {}
  }

  type TaskcategoryGetPayload<S extends boolean | null | undefined | TaskcategoryDefaultArgs> = $Result.GetResult<Prisma.$TaskcategoryPayload, S>

  type TaskcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskcategoryCountAggregateInputType | true
    }

  export interface TaskcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taskcategory'], meta: { name: 'Taskcategory' } }
    /**
     * Find zero or one Taskcategory that matches the filter.
     * @param {TaskcategoryFindUniqueArgs} args - Arguments to find a Taskcategory
     * @example
     * // Get one Taskcategory
     * const taskcategory = await prisma.taskcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskcategoryFindUniqueArgs>(args: SelectSubset<T, TaskcategoryFindUniqueArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taskcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskcategoryFindUniqueOrThrowArgs} args - Arguments to find a Taskcategory
     * @example
     * // Get one Taskcategory
     * const taskcategory = await prisma.taskcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taskcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryFindFirstArgs} args - Arguments to find a Taskcategory
     * @example
     * // Get one Taskcategory
     * const taskcategory = await prisma.taskcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskcategoryFindFirstArgs>(args?: SelectSubset<T, TaskcategoryFindFirstArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taskcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryFindFirstOrThrowArgs} args - Arguments to find a Taskcategory
     * @example
     * // Get one Taskcategory
     * const taskcategory = await prisma.taskcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taskcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taskcategories
     * const taskcategories = await prisma.taskcategory.findMany()
     * 
     * // Get first 10 Taskcategories
     * const taskcategories = await prisma.taskcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskcategoryWithIdOnly = await prisma.taskcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskcategoryFindManyArgs>(args?: SelectSubset<T, TaskcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taskcategory.
     * @param {TaskcategoryCreateArgs} args - Arguments to create a Taskcategory.
     * @example
     * // Create one Taskcategory
     * const Taskcategory = await prisma.taskcategory.create({
     *   data: {
     *     // ... data to create a Taskcategory
     *   }
     * })
     * 
     */
    create<T extends TaskcategoryCreateArgs>(args: SelectSubset<T, TaskcategoryCreateArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taskcategories.
     * @param {TaskcategoryCreateManyArgs} args - Arguments to create many Taskcategories.
     * @example
     * // Create many Taskcategories
     * const taskcategory = await prisma.taskcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskcategoryCreateManyArgs>(args?: SelectSubset<T, TaskcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taskcategories and returns the data saved in the database.
     * @param {TaskcategoryCreateManyAndReturnArgs} args - Arguments to create many Taskcategories.
     * @example
     * // Create many Taskcategories
     * const taskcategory = await prisma.taskcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taskcategories and only return the `id`
     * const taskcategoryWithIdOnly = await prisma.taskcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taskcategory.
     * @param {TaskcategoryDeleteArgs} args - Arguments to delete one Taskcategory.
     * @example
     * // Delete one Taskcategory
     * const Taskcategory = await prisma.taskcategory.delete({
     *   where: {
     *     // ... filter to delete one Taskcategory
     *   }
     * })
     * 
     */
    delete<T extends TaskcategoryDeleteArgs>(args: SelectSubset<T, TaskcategoryDeleteArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taskcategory.
     * @param {TaskcategoryUpdateArgs} args - Arguments to update one Taskcategory.
     * @example
     * // Update one Taskcategory
     * const taskcategory = await prisma.taskcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskcategoryUpdateArgs>(args: SelectSubset<T, TaskcategoryUpdateArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taskcategories.
     * @param {TaskcategoryDeleteManyArgs} args - Arguments to filter Taskcategories to delete.
     * @example
     * // Delete a few Taskcategories
     * const { count } = await prisma.taskcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskcategoryDeleteManyArgs>(args?: SelectSubset<T, TaskcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taskcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taskcategories
     * const taskcategory = await prisma.taskcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskcategoryUpdateManyArgs>(args: SelectSubset<T, TaskcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taskcategories and returns the data updated in the database.
     * @param {TaskcategoryUpdateManyAndReturnArgs} args - Arguments to update many Taskcategories.
     * @example
     * // Update many Taskcategories
     * const taskcategory = await prisma.taskcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taskcategories and only return the `id`
     * const taskcategoryWithIdOnly = await prisma.taskcategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taskcategory.
     * @param {TaskcategoryUpsertArgs} args - Arguments to update or create a Taskcategory.
     * @example
     * // Update or create a Taskcategory
     * const taskcategory = await prisma.taskcategory.upsert({
     *   create: {
     *     // ... data to create a Taskcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taskcategory we want to update
     *   }
     * })
     */
    upsert<T extends TaskcategoryUpsertArgs>(args: SelectSubset<T, TaskcategoryUpsertArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taskcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryCountArgs} args - Arguments to filter Taskcategories to count.
     * @example
     * // Count the number of Taskcategories
     * const count = await prisma.taskcategory.count({
     *   where: {
     *     // ... the filter for the Taskcategories we want to count
     *   }
     * })
    **/
    count<T extends TaskcategoryCountArgs>(
      args?: Subset<T, TaskcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taskcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskcategoryAggregateArgs>(args: Subset<T, TaskcategoryAggregateArgs>): Prisma.PrismaPromise<GetTaskcategoryAggregateType<T>>

    /**
     * Group by Taskcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcategoryGroupByArgs} args - Group by arguments.
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
      T extends TaskcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskcategoryGroupByArgs['orderBy'] }
        : { orderBy?: TaskcategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taskcategory model
   */
  readonly fields: TaskcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taskcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Taskcategory model
   */
  interface TaskcategoryFieldRefs {
    readonly id: FieldRef<"Taskcategory", 'String'>
    readonly workflow_id: FieldRef<"Taskcategory", 'String'>
    readonly name: FieldRef<"Taskcategory", 'String'>
    readonly description: FieldRef<"Taskcategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Taskcategory findUnique
   */
  export type TaskcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Taskcategory to fetch.
     */
    where: TaskcategoryWhereUniqueInput
  }

  /**
   * Taskcategory findUniqueOrThrow
   */
  export type TaskcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Taskcategory to fetch.
     */
    where: TaskcategoryWhereUniqueInput
  }

  /**
   * Taskcategory findFirst
   */
  export type TaskcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Taskcategory to fetch.
     */
    where?: TaskcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcategories to fetch.
     */
    orderBy?: TaskcategoryOrderByWithRelationInput | TaskcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taskcategories.
     */
    cursor?: TaskcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taskcategories.
     */
    distinct?: TaskcategoryScalarFieldEnum | TaskcategoryScalarFieldEnum[]
  }

  /**
   * Taskcategory findFirstOrThrow
   */
  export type TaskcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Taskcategory to fetch.
     */
    where?: TaskcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcategories to fetch.
     */
    orderBy?: TaskcategoryOrderByWithRelationInput | TaskcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taskcategories.
     */
    cursor?: TaskcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taskcategories.
     */
    distinct?: TaskcategoryScalarFieldEnum | TaskcategoryScalarFieldEnum[]
  }

  /**
   * Taskcategory findMany
   */
  export type TaskcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Taskcategories to fetch.
     */
    where?: TaskcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcategories to fetch.
     */
    orderBy?: TaskcategoryOrderByWithRelationInput | TaskcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taskcategories.
     */
    cursor?: TaskcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcategories.
     */
    skip?: number
    distinct?: TaskcategoryScalarFieldEnum | TaskcategoryScalarFieldEnum[]
  }

  /**
   * Taskcategory create
   */
  export type TaskcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Taskcategory.
     */
    data: XOR<TaskcategoryCreateInput, TaskcategoryUncheckedCreateInput>
  }

  /**
   * Taskcategory createMany
   */
  export type TaskcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taskcategories.
     */
    data: TaskcategoryCreateManyInput | TaskcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taskcategory createManyAndReturn
   */
  export type TaskcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Taskcategories.
     */
    data: TaskcategoryCreateManyInput | TaskcategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taskcategory update
   */
  export type TaskcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Taskcategory.
     */
    data: XOR<TaskcategoryUpdateInput, TaskcategoryUncheckedUpdateInput>
    /**
     * Choose, which Taskcategory to update.
     */
    where: TaskcategoryWhereUniqueInput
  }

  /**
   * Taskcategory updateMany
   */
  export type TaskcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taskcategories.
     */
    data: XOR<TaskcategoryUpdateManyMutationInput, TaskcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Taskcategories to update
     */
    where?: TaskcategoryWhereInput
    /**
     * Limit how many Taskcategories to update.
     */
    limit?: number
  }

  /**
   * Taskcategory updateManyAndReturn
   */
  export type TaskcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * The data used to update Taskcategories.
     */
    data: XOR<TaskcategoryUpdateManyMutationInput, TaskcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Taskcategories to update
     */
    where?: TaskcategoryWhereInput
    /**
     * Limit how many Taskcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taskcategory upsert
   */
  export type TaskcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Taskcategory to update in case it exists.
     */
    where: TaskcategoryWhereUniqueInput
    /**
     * In case the Taskcategory found by the `where` argument doesn't exist, create a new Taskcategory with this data.
     */
    create: XOR<TaskcategoryCreateInput, TaskcategoryUncheckedCreateInput>
    /**
     * In case the Taskcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskcategoryUpdateInput, TaskcategoryUncheckedUpdateInput>
  }

  /**
   * Taskcategory delete
   */
  export type TaskcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    /**
     * Filter which Taskcategory to delete.
     */
    where: TaskcategoryWhereUniqueInput
  }

  /**
   * Taskcategory deleteMany
   */
  export type TaskcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taskcategories to delete
     */
    where?: TaskcategoryWhereInput
    /**
     * Limit how many Taskcategories to delete.
     */
    limit?: number
  }

  /**
   * Taskcategory without action
   */
  export type TaskcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tasktype
   */

  export type AggregateTasktype = {
    _count: TasktypeCountAggregateOutputType | null
    _min: TasktypeMinAggregateOutputType | null
    _max: TasktypeMaxAggregateOutputType | null
  }

  export type TasktypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type TasktypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type TasktypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TasktypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TasktypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TasktypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TasktypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasktype to aggregate.
     */
    where?: TasktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasktypes to fetch.
     */
    orderBy?: TasktypeOrderByWithRelationInput | TasktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasktypes
    **/
    _count?: true | TasktypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasktypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasktypeMaxAggregateInputType
  }

  export type GetTasktypeAggregateType<T extends TasktypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTasktype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasktype[P]>
      : GetScalarType<T[P], AggregateTasktype[P]>
  }




  export type TasktypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasktypeWhereInput
    orderBy?: TasktypeOrderByWithAggregationInput | TasktypeOrderByWithAggregationInput[]
    by: TasktypeScalarFieldEnum[] | TasktypeScalarFieldEnum
    having?: TasktypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasktypeCountAggregateInputType | true
    _min?: TasktypeMinAggregateInputType
    _max?: TasktypeMaxAggregateInputType
  }

  export type TasktypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: TasktypeCountAggregateOutputType | null
    _min: TasktypeMinAggregateOutputType | null
    _max: TasktypeMaxAggregateOutputType | null
  }

  type GetTasktypeGroupByPayload<T extends TasktypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasktypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasktypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasktypeGroupByOutputType[P]>
            : GetScalarType<T[P], TasktypeGroupByOutputType[P]>
        }
      >
    >


  export type TasktypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    task?: boolean | Tasktype$taskArgs<ExtArgs>
    _count?: boolean | TasktypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasktype"]>

  export type TasktypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["tasktype"]>

  export type TasktypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["tasktype"]>

  export type TasktypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type TasktypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["tasktype"]>
  export type TasktypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Tasktype$taskArgs<ExtArgs>
    _count?: boolean | TasktypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TasktypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TasktypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TasktypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasktype"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["tasktype"]>
    composites: {}
  }

  type TasktypeGetPayload<S extends boolean | null | undefined | TasktypeDefaultArgs> = $Result.GetResult<Prisma.$TasktypePayload, S>

  type TasktypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasktypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasktypeCountAggregateInputType | true
    }

  export interface TasktypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasktype'], meta: { name: 'Tasktype' } }
    /**
     * Find zero or one Tasktype that matches the filter.
     * @param {TasktypeFindUniqueArgs} args - Arguments to find a Tasktype
     * @example
     * // Get one Tasktype
     * const tasktype = await prisma.tasktype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasktypeFindUniqueArgs>(args: SelectSubset<T, TasktypeFindUniqueArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasktype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasktypeFindUniqueOrThrowArgs} args - Arguments to find a Tasktype
     * @example
     * // Get one Tasktype
     * const tasktype = await prisma.tasktype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasktypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TasktypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasktype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeFindFirstArgs} args - Arguments to find a Tasktype
     * @example
     * // Get one Tasktype
     * const tasktype = await prisma.tasktype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasktypeFindFirstArgs>(args?: SelectSubset<T, TasktypeFindFirstArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasktype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeFindFirstOrThrowArgs} args - Arguments to find a Tasktype
     * @example
     * // Get one Tasktype
     * const tasktype = await prisma.tasktype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasktypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TasktypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasktypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasktypes
     * const tasktypes = await prisma.tasktype.findMany()
     * 
     * // Get first 10 Tasktypes
     * const tasktypes = await prisma.tasktype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasktypeWithIdOnly = await prisma.tasktype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasktypeFindManyArgs>(args?: SelectSubset<T, TasktypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasktype.
     * @param {TasktypeCreateArgs} args - Arguments to create a Tasktype.
     * @example
     * // Create one Tasktype
     * const Tasktype = await prisma.tasktype.create({
     *   data: {
     *     // ... data to create a Tasktype
     *   }
     * })
     * 
     */
    create<T extends TasktypeCreateArgs>(args: SelectSubset<T, TasktypeCreateArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasktypes.
     * @param {TasktypeCreateManyArgs} args - Arguments to create many Tasktypes.
     * @example
     * // Create many Tasktypes
     * const tasktype = await prisma.tasktype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasktypeCreateManyArgs>(args?: SelectSubset<T, TasktypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasktypes and returns the data saved in the database.
     * @param {TasktypeCreateManyAndReturnArgs} args - Arguments to create many Tasktypes.
     * @example
     * // Create many Tasktypes
     * const tasktype = await prisma.tasktype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasktypes and only return the `id`
     * const tasktypeWithIdOnly = await prisma.tasktype.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasktypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TasktypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasktype.
     * @param {TasktypeDeleteArgs} args - Arguments to delete one Tasktype.
     * @example
     * // Delete one Tasktype
     * const Tasktype = await prisma.tasktype.delete({
     *   where: {
     *     // ... filter to delete one Tasktype
     *   }
     * })
     * 
     */
    delete<T extends TasktypeDeleteArgs>(args: SelectSubset<T, TasktypeDeleteArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasktype.
     * @param {TasktypeUpdateArgs} args - Arguments to update one Tasktype.
     * @example
     * // Update one Tasktype
     * const tasktype = await prisma.tasktype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasktypeUpdateArgs>(args: SelectSubset<T, TasktypeUpdateArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasktypes.
     * @param {TasktypeDeleteManyArgs} args - Arguments to filter Tasktypes to delete.
     * @example
     * // Delete a few Tasktypes
     * const { count } = await prisma.tasktype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasktypeDeleteManyArgs>(args?: SelectSubset<T, TasktypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasktypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasktypes
     * const tasktype = await prisma.tasktype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasktypeUpdateManyArgs>(args: SelectSubset<T, TasktypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasktypes and returns the data updated in the database.
     * @param {TasktypeUpdateManyAndReturnArgs} args - Arguments to update many Tasktypes.
     * @example
     * // Update many Tasktypes
     * const tasktype = await prisma.tasktype.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasktypes and only return the `id`
     * const tasktypeWithIdOnly = await prisma.tasktype.updateManyAndReturn({
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
    updateManyAndReturn<T extends TasktypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TasktypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasktype.
     * @param {TasktypeUpsertArgs} args - Arguments to update or create a Tasktype.
     * @example
     * // Update or create a Tasktype
     * const tasktype = await prisma.tasktype.upsert({
     *   create: {
     *     // ... data to create a Tasktype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasktype we want to update
     *   }
     * })
     */
    upsert<T extends TasktypeUpsertArgs>(args: SelectSubset<T, TasktypeUpsertArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasktypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeCountArgs} args - Arguments to filter Tasktypes to count.
     * @example
     * // Count the number of Tasktypes
     * const count = await prisma.tasktype.count({
     *   where: {
     *     // ... the filter for the Tasktypes we want to count
     *   }
     * })
    **/
    count<T extends TasktypeCountArgs>(
      args?: Subset<T, TasktypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasktypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasktype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasktypeAggregateArgs>(args: Subset<T, TasktypeAggregateArgs>): Prisma.PrismaPromise<GetTasktypeAggregateType<T>>

    /**
     * Group by Tasktype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktypeGroupByArgs} args - Group by arguments.
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
      T extends TasktypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasktypeGroupByArgs['orderBy'] }
        : { orderBy?: TasktypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasktypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasktypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasktype model
   */
  readonly fields: TasktypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasktype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasktypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends Tasktype$taskArgs<ExtArgs> = {}>(args?: Subset<T, Tasktype$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tasktype model
   */
  interface TasktypeFieldRefs {
    readonly id: FieldRef<"Tasktype", 'String'>
    readonly name: FieldRef<"Tasktype", 'String'>
    readonly description: FieldRef<"Tasktype", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tasktype findUnique
   */
  export type TasktypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter, which Tasktype to fetch.
     */
    where: TasktypeWhereUniqueInput
  }

  /**
   * Tasktype findUniqueOrThrow
   */
  export type TasktypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter, which Tasktype to fetch.
     */
    where: TasktypeWhereUniqueInput
  }

  /**
   * Tasktype findFirst
   */
  export type TasktypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter, which Tasktype to fetch.
     */
    where?: TasktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasktypes to fetch.
     */
    orderBy?: TasktypeOrderByWithRelationInput | TasktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasktypes.
     */
    cursor?: TasktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasktypes.
     */
    distinct?: TasktypeScalarFieldEnum | TasktypeScalarFieldEnum[]
  }

  /**
   * Tasktype findFirstOrThrow
   */
  export type TasktypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter, which Tasktype to fetch.
     */
    where?: TasktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasktypes to fetch.
     */
    orderBy?: TasktypeOrderByWithRelationInput | TasktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasktypes.
     */
    cursor?: TasktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasktypes.
     */
    distinct?: TasktypeScalarFieldEnum | TasktypeScalarFieldEnum[]
  }

  /**
   * Tasktype findMany
   */
  export type TasktypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter, which Tasktypes to fetch.
     */
    where?: TasktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasktypes to fetch.
     */
    orderBy?: TasktypeOrderByWithRelationInput | TasktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasktypes.
     */
    cursor?: TasktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasktypes.
     */
    skip?: number
    distinct?: TasktypeScalarFieldEnum | TasktypeScalarFieldEnum[]
  }

  /**
   * Tasktype create
   */
  export type TasktypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasktype.
     */
    data: XOR<TasktypeCreateInput, TasktypeUncheckedCreateInput>
  }

  /**
   * Tasktype createMany
   */
  export type TasktypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasktypes.
     */
    data: TasktypeCreateManyInput | TasktypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasktype createManyAndReturn
   */
  export type TasktypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * The data used to create many Tasktypes.
     */
    data: TasktypeCreateManyInput | TasktypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasktype update
   */
  export type TasktypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasktype.
     */
    data: XOR<TasktypeUpdateInput, TasktypeUncheckedUpdateInput>
    /**
     * Choose, which Tasktype to update.
     */
    where: TasktypeWhereUniqueInput
  }

  /**
   * Tasktype updateMany
   */
  export type TasktypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasktypes.
     */
    data: XOR<TasktypeUpdateManyMutationInput, TasktypeUncheckedUpdateManyInput>
    /**
     * Filter which Tasktypes to update
     */
    where?: TasktypeWhereInput
    /**
     * Limit how many Tasktypes to update.
     */
    limit?: number
  }

  /**
   * Tasktype updateManyAndReturn
   */
  export type TasktypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * The data used to update Tasktypes.
     */
    data: XOR<TasktypeUpdateManyMutationInput, TasktypeUncheckedUpdateManyInput>
    /**
     * Filter which Tasktypes to update
     */
    where?: TasktypeWhereInput
    /**
     * Limit how many Tasktypes to update.
     */
    limit?: number
  }

  /**
   * Tasktype upsert
   */
  export type TasktypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasktype to update in case it exists.
     */
    where: TasktypeWhereUniqueInput
    /**
     * In case the Tasktype found by the `where` argument doesn't exist, create a new Tasktype with this data.
     */
    create: XOR<TasktypeCreateInput, TasktypeUncheckedCreateInput>
    /**
     * In case the Tasktype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasktypeUpdateInput, TasktypeUncheckedUpdateInput>
  }

  /**
   * Tasktype delete
   */
  export type TasktypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
    /**
     * Filter which Tasktype to delete.
     */
    where: TasktypeWhereUniqueInput
  }

  /**
   * Tasktype deleteMany
   */
  export type TasktypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasktypes to delete
     */
    where?: TasktypeWhereInput
    /**
     * Limit how many Tasktypes to delete.
     */
    limit?: number
  }

  /**
   * Tasktype.task
   */
  export type Tasktype$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Tasktype without action
   */
  export type TasktypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasktype
     */
    select?: TasktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasktype
     */
    omit?: TasktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasktypeInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    context: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    context: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    context: number
    application: number
    fpath: number
    updated: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    context?: true
    application?: true
    fpath?: true
    updated?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    context?: true
    application?: true
    fpath?: true
    updated?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    context?: true
    application?: true
    fpath?: true
    updated?: true
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
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    name: string
    description: string | null
    context: string | null
    application: string | null
    fpath: string | null
    updated: Date
    _count: WorkflowCountAggregateOutputType | null
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
    name?: boolean
    description?: boolean
    context?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    task?: boolean | Workflow$taskArgs<ExtArgs>
    taskcategory?: boolean | Workflow$taskcategoryArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    context?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    context?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    context?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "context" | "application" | "fpath" | "updated", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Workflow$taskArgs<ExtArgs>
    taskcategory?: boolean | Workflow$taskcategoryArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>[]
      taskcategory: Prisma.$TaskcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      context: string | null
      application: string | null
      fpath: string | null
      updated: Date
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
    task<T extends Workflow$taskArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskcategory<T extends Workflow$taskcategoryArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$taskcategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly context: FieldRef<"Workflow", 'String'>
    readonly application: FieldRef<"Workflow", 'String'>
    readonly fpath: FieldRef<"Workflow", 'String'>
    readonly updated: FieldRef<"Workflow", 'DateTime'>
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
   * Workflow.task
   */
  export type Workflow$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Workflow.taskcategory
   */
  export type Workflow$taskcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskcategory
     */
    select?: TaskcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskcategory
     */
    omit?: TaskcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcategoryInclude<ExtArgs> | null
    where?: TaskcategoryWhereInput
    orderBy?: TaskcategoryOrderByWithRelationInput | TaskcategoryOrderByWithRelationInput[]
    cursor?: TaskcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskcategoryScalarFieldEnum | TaskcategoryScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProglanguageScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProglanguageScalarFieldEnum = (typeof ProglanguageScalarFieldEnum)[keyof typeof ProglanguageScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    proglanguage_id: 'proglanguage_id',
    datacode: 'datacode'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    proglanguage_id: 'proglanguage_id',
    tasktype_id: 'tasktype_id',
    workflow_id: 'workflow_id',
    taskcategory_id: 'taskcategory_id',
    orden: 'orden',
    name: 'name',
    tkgroup: 'tkgroup',
    description: 'description',
    files: 'files',
    folders: 'folders'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskcategoryScalarFieldEnum: {
    id: 'id',
    workflow_id: 'workflow_id',
    name: 'name',
    description: 'description'
  };

  export type TaskcategoryScalarFieldEnum = (typeof TaskcategoryScalarFieldEnum)[keyof typeof TaskcategoryScalarFieldEnum]


  export const TasktypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TasktypeScalarFieldEnum = (typeof TasktypeScalarFieldEnum)[keyof typeof TasktypeScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    context: 'context',
    application: 'application',
    fpath: 'fpath',
    updated: 'updated'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ProglanguageWhereInput = {
    AND?: ProglanguageWhereInput | ProglanguageWhereInput[]
    OR?: ProglanguageWhereInput[]
    NOT?: ProglanguageWhereInput | ProglanguageWhereInput[]
    id?: StringFilter<"Proglanguage"> | string
    name?: StringFilter<"Proglanguage"> | string
    task?: TaskListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type ProglanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    task?: TaskOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type ProglanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProglanguageWhereInput | ProglanguageWhereInput[]
    OR?: ProglanguageWhereInput[]
    NOT?: ProglanguageWhereInput | ProglanguageWhereInput[]
    name?: StringFilter<"Proglanguage"> | string
    task?: TaskListRelationFilter
    templates?: TemplateListRelationFilter
  }, "id">

  export type ProglanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProglanguageCountOrderByAggregateInput
    _max?: ProglanguageMaxOrderByAggregateInput
    _min?: ProglanguageMinOrderByAggregateInput
  }

  export type ProglanguageScalarWhereWithAggregatesInput = {
    AND?: ProglanguageScalarWhereWithAggregatesInput | ProglanguageScalarWhereWithAggregatesInput[]
    OR?: ProglanguageScalarWhereWithAggregatesInput[]
    NOT?: ProglanguageScalarWhereWithAggregatesInput | ProglanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proglanguage"> | string
    name?: StringWithAggregatesFilter<"Proglanguage"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    proglanguage_id?: StringFilter<"Template"> | string
    datacode?: StringFilter<"Template"> | string
    proglanguage?: XOR<ProglanguageScalarRelationFilter, ProglanguageWhereInput>
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
    proglanguage?: ProglanguageOrderByWithRelationInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    proglanguage_id?: StringFilter<"Template"> | string
    datacode?: StringFilter<"Template"> | string
    proglanguage?: XOR<ProglanguageScalarRelationFilter, ProglanguageWhereInput>
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    proglanguage_id?: StringWithAggregatesFilter<"Template"> | string
    datacode?: StringWithAggregatesFilter<"Template"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    proglanguage_id?: StringFilter<"Task"> | string
    tasktype_id?: StringFilter<"Task"> | string
    workflow_id?: StringFilter<"Task"> | string
    taskcategory_id?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
    proglanguage?: XOR<ProglanguageScalarRelationFilter, ProglanguageWhereInput>
    tasktype?: XOR<TasktypeScalarRelationFilter, TasktypeWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    proglanguage_id?: SortOrder
    tasktype_id?: SortOrder
    workflow_id?: SortOrder
    taskcategory_id?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    folders?: SortOrderInput | SortOrder
    proglanguage?: ProglanguageOrderByWithRelationInput
    tasktype?: TasktypeOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    proglanguage_id?: StringFilter<"Task"> | string
    tasktype_id?: StringFilter<"Task"> | string
    workflow_id?: StringFilter<"Task"> | string
    taskcategory_id?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
    proglanguage?: XOR<ProglanguageScalarRelationFilter, ProglanguageWhereInput>
    tasktype?: XOR<TasktypeScalarRelationFilter, TasktypeWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    proglanguage_id?: SortOrder
    tasktype_id?: SortOrder
    workflow_id?: SortOrder
    taskcategory_id?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    folders?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    proglanguage_id?: StringWithAggregatesFilter<"Task"> | string
    tasktype_id?: StringWithAggregatesFilter<"Task"> | string
    workflow_id?: StringWithAggregatesFilter<"Task"> | string
    taskcategory_id?: IntWithAggregatesFilter<"Task"> | number
    orden?: IntWithAggregatesFilter<"Task"> | number
    name?: StringWithAggregatesFilter<"Task"> | string
    tkgroup?: IntWithAggregatesFilter<"Task"> | number
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    files?: StringNullableWithAggregatesFilter<"Task"> | string | null
    folders?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type TaskcategoryWhereInput = {
    AND?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    OR?: TaskcategoryWhereInput[]
    NOT?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    id?: StringFilter<"Taskcategory"> | string
    workflow_id?: StringFilter<"Taskcategory"> | string
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type TaskcategoryOrderByWithRelationInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type TaskcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    OR?: TaskcategoryWhereInput[]
    NOT?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    workflow_id?: StringFilter<"Taskcategory"> | string
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type TaskcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TaskcategoryCountOrderByAggregateInput
    _max?: TaskcategoryMaxOrderByAggregateInput
    _min?: TaskcategoryMinOrderByAggregateInput
  }

  export type TaskcategoryScalarWhereWithAggregatesInput = {
    AND?: TaskcategoryScalarWhereWithAggregatesInput | TaskcategoryScalarWhereWithAggregatesInput[]
    OR?: TaskcategoryScalarWhereWithAggregatesInput[]
    NOT?: TaskcategoryScalarWhereWithAggregatesInput | TaskcategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Taskcategory"> | string
    workflow_id?: StringWithAggregatesFilter<"Taskcategory"> | string
    name?: StringWithAggregatesFilter<"Taskcategory"> | string
    description?: StringNullableWithAggregatesFilter<"Taskcategory"> | string | null
  }

  export type TasktypeWhereInput = {
    AND?: TasktypeWhereInput | TasktypeWhereInput[]
    OR?: TasktypeWhereInput[]
    NOT?: TasktypeWhereInput | TasktypeWhereInput[]
    id?: StringFilter<"Tasktype"> | string
    name?: StringFilter<"Tasktype"> | string
    description?: StringNullableFilter<"Tasktype"> | string | null
    task?: TaskListRelationFilter
  }

  export type TasktypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    task?: TaskOrderByRelationAggregateInput
  }

  export type TasktypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TasktypeWhereInput | TasktypeWhereInput[]
    OR?: TasktypeWhereInput[]
    NOT?: TasktypeWhereInput | TasktypeWhereInput[]
    name?: StringFilter<"Tasktype"> | string
    description?: StringNullableFilter<"Tasktype"> | string | null
    task?: TaskListRelationFilter
  }, "id">

  export type TasktypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TasktypeCountOrderByAggregateInput
    _max?: TasktypeMaxOrderByAggregateInput
    _min?: TasktypeMinOrderByAggregateInput
  }

  export type TasktypeScalarWhereWithAggregatesInput = {
    AND?: TasktypeScalarWhereWithAggregatesInput | TasktypeScalarWhereWithAggregatesInput[]
    OR?: TasktypeScalarWhereWithAggregatesInput[]
    NOT?: TasktypeScalarWhereWithAggregatesInput | TasktypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tasktype"> | string
    name?: StringWithAggregatesFilter<"Tasktype"> | string
    description?: StringNullableWithAggregatesFilter<"Tasktype"> | string | null
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    context?: StringNullableFilter<"Workflow"> | string | null
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    task?: TaskListRelationFilter
    taskcategory?: TaskcategoryListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
    task?: TaskOrderByRelationAggregateInput
    taskcategory?: TaskcategoryOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    context?: StringNullableFilter<"Workflow"> | string | null
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    task?: TaskListRelationFilter
    taskcategory?: TaskcategoryListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    context?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    context?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    application?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    fpath?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    updated?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type ProglanguageCreateInput = {
    id: string
    name: string
    task?: TaskCreateNestedManyWithoutProglanguageInput
    templates?: TemplateCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageUncheckedCreateInput = {
    id: string
    name: string
    task?: TaskUncheckedCreateNestedManyWithoutProglanguageInput
    templates?: TemplateUncheckedCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateManyWithoutProglanguageNestedInput
    templates?: TemplateUpdateManyWithoutProglanguageNestedInput
  }

  export type ProglanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    task?: TaskUncheckedUpdateManyWithoutProglanguageNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutProglanguageNestedInput
  }

  export type ProglanguageCreateManyInput = {
    id: string
    name: string
  }

  export type ProglanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProglanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id: string
    name: string
    datacode: string
    proglanguage: ProglanguageCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateInput = {
    id: string
    name: string
    proglanguage_id: string
    datacode: string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
    proglanguage?: ProglanguageUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateManyInput = {
    id: string
    name: string
    proglanguage_id: string
    datacode: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    proglanguage: ProglanguageCreateNestedOneWithoutTaskInput
    tasktype: TasktypeCreateNestedOneWithoutTaskInput
    workflow: WorkflowCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id: string
    proglanguage_id: string
    tasktype_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    proglanguage?: ProglanguageUpdateOneRequiredWithoutTaskNestedInput
    tasktype?: TasktypeUpdateOneRequiredWithoutTaskNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyInput = {
    id: string
    proglanguage_id: string
    tasktype_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryCreateInput = {
    id: string
    name: string
    description?: string | null
    workflow: WorkflowCreateNestedOneWithoutTaskcategoryInput
  }

  export type TaskcategoryUncheckedCreateInput = {
    id: string
    workflow_id: string
    name: string
    description?: string | null
  }

  export type TaskcategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskcategoryNestedInput
  }

  export type TaskcategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryCreateManyInput = {
    id: string
    workflow_id: string
    name: string
    description?: string | null
  }

  export type TaskcategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasktypeCreateInput = {
    id: string
    name: string
    description?: string | null
    task?: TaskCreateNestedManyWithoutTasktypeInput
  }

  export type TasktypeUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    task?: TaskUncheckedCreateNestedManyWithoutTasktypeInput
  }

  export type TasktypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateManyWithoutTasktypeNestedInput
  }

  export type TasktypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUncheckedUpdateManyWithoutTasktypeNestedInput
  }

  export type TasktypeCreateManyInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TasktypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasktypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowCreateInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    task?: TaskCreateNestedManyWithoutWorkflowInput
    taskcategory?: TaskcategoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    task?: TaskUncheckedCreateNestedManyWithoutWorkflowInput
    taskcategory?: TaskcategoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateManyWithoutWorkflowNestedInput
    taskcategory?: TaskcategoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUncheckedUpdateManyWithoutWorkflowNestedInput
    taskcategory?: TaskcategoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
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
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProglanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProglanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProglanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type ProglanguageScalarRelationFilter = {
    is?: ProglanguageWhereInput
    isNot?: ProglanguageWhereInput
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
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

  export type TasktypeScalarRelationFilter = {
    is?: TasktypeWhereInput
    isNot?: TasktypeWhereInput
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    proglanguage_id?: SortOrder
    tasktype_id?: SortOrder
    workflow_id?: SortOrder
    taskcategory_id?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    taskcategory_id?: SortOrder
    orden?: SortOrder
    tkgroup?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    proglanguage_id?: SortOrder
    tasktype_id?: SortOrder
    workflow_id?: SortOrder
    taskcategory_id?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    proglanguage_id?: SortOrder
    tasktype_id?: SortOrder
    workflow_id?: SortOrder
    taskcategory_id?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    taskcategory_id?: SortOrder
    orden?: SortOrder
    tkgroup?: SortOrder
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

  export type TaskcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TaskcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TaskcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TasktypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TasktypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TasktypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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

  export type TaskcategoryListRelationFilter = {
    every?: TaskcategoryWhereInput
    some?: TaskcategoryWhereInput
    none?: TaskcategoryWhereInput
  }

  export type TaskcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    context?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    context?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    context?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
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

  export type TaskCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput> | TaskCreateWithoutProglanguageInput[] | TaskUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProglanguageInput | TaskCreateOrConnectWithoutProglanguageInput[]
    createMany?: TaskCreateManyProglanguageInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput> | TemplateCreateWithoutProglanguageInput[] | TemplateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutProglanguageInput | TemplateCreateOrConnectWithoutProglanguageInput[]
    createMany?: TemplateCreateManyProglanguageInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput> | TaskCreateWithoutProglanguageInput[] | TaskUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProglanguageInput | TaskCreateOrConnectWithoutProglanguageInput[]
    createMany?: TaskCreateManyProglanguageInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput> | TemplateCreateWithoutProglanguageInput[] | TemplateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutProglanguageInput | TemplateCreateOrConnectWithoutProglanguageInput[]
    createMany?: TemplateCreateManyProglanguageInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TaskUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput> | TaskCreateWithoutProglanguageInput[] | TaskUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProglanguageInput | TaskCreateOrConnectWithoutProglanguageInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProglanguageInput | TaskUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: TaskCreateManyProglanguageInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProglanguageInput | TaskUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProglanguageInput | TaskUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput> | TemplateCreateWithoutProglanguageInput[] | TemplateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutProglanguageInput | TemplateCreateOrConnectWithoutProglanguageInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutProglanguageInput | TemplateUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: TemplateCreateManyProglanguageInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutProglanguageInput | TemplateUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutProglanguageInput | TemplateUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput> | TaskCreateWithoutProglanguageInput[] | TaskUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProglanguageInput | TaskCreateOrConnectWithoutProglanguageInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProglanguageInput | TaskUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: TaskCreateManyProglanguageInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProglanguageInput | TaskUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProglanguageInput | TaskUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput> | TemplateCreateWithoutProglanguageInput[] | TemplateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutProglanguageInput | TemplateCreateOrConnectWithoutProglanguageInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutProglanguageInput | TemplateUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: TemplateCreateManyProglanguageInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutProglanguageInput | TemplateUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutProglanguageInput | TemplateUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ProglanguageCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<ProglanguageCreateWithoutTemplatesInput, ProglanguageUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ProglanguageCreateOrConnectWithoutTemplatesInput
    connect?: ProglanguageWhereUniqueInput
  }

  export type ProglanguageUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<ProglanguageCreateWithoutTemplatesInput, ProglanguageUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ProglanguageCreateOrConnectWithoutTemplatesInput
    upsert?: ProglanguageUpsertWithoutTemplatesInput
    connect?: ProglanguageWhereUniqueInput
    update?: XOR<XOR<ProglanguageUpdateToOneWithWhereWithoutTemplatesInput, ProglanguageUpdateWithoutTemplatesInput>, ProglanguageUncheckedUpdateWithoutTemplatesInput>
  }

  export type ProglanguageCreateNestedOneWithoutTaskInput = {
    create?: XOR<ProglanguageCreateWithoutTaskInput, ProglanguageUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ProglanguageCreateOrConnectWithoutTaskInput
    connect?: ProglanguageWhereUniqueInput
  }

  export type TasktypeCreateNestedOneWithoutTaskInput = {
    create?: XOR<TasktypeCreateWithoutTaskInput, TasktypeUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TasktypeCreateOrConnectWithoutTaskInput
    connect?: TasktypeWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutTaskInput = {
    create?: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskInput
    connect?: WorkflowWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProglanguageUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<ProglanguageCreateWithoutTaskInput, ProglanguageUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ProglanguageCreateOrConnectWithoutTaskInput
    upsert?: ProglanguageUpsertWithoutTaskInput
    connect?: ProglanguageWhereUniqueInput
    update?: XOR<XOR<ProglanguageUpdateToOneWithWhereWithoutTaskInput, ProglanguageUpdateWithoutTaskInput>, ProglanguageUncheckedUpdateWithoutTaskInput>
  }

  export type TasktypeUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<TasktypeCreateWithoutTaskInput, TasktypeUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TasktypeCreateOrConnectWithoutTaskInput
    upsert?: TasktypeUpsertWithoutTaskInput
    connect?: TasktypeWhereUniqueInput
    update?: XOR<XOR<TasktypeUpdateToOneWithWhereWithoutTaskInput, TasktypeUpdateWithoutTaskInput>, TasktypeUncheckedUpdateWithoutTaskInput>
  }

  export type WorkflowUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskInput
    upsert?: WorkflowUpsertWithoutTaskInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTaskInput, WorkflowUpdateWithoutTaskInput>, WorkflowUncheckedUpdateWithoutTaskInput>
  }

  export type WorkflowCreateNestedOneWithoutTaskcategoryInput = {
    create?: XOR<WorkflowCreateWithoutTaskcategoryInput, WorkflowUncheckedCreateWithoutTaskcategoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskcategoryInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutTaskcategoryNestedInput = {
    create?: XOR<WorkflowCreateWithoutTaskcategoryInput, WorkflowUncheckedCreateWithoutTaskcategoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskcategoryInput
    upsert?: WorkflowUpsertWithoutTaskcategoryInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTaskcategoryInput, WorkflowUpdateWithoutTaskcategoryInput>, WorkflowUncheckedUpdateWithoutTaskcategoryInput>
  }

  export type TaskCreateNestedManyWithoutTasktypeInput = {
    create?: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput> | TaskCreateWithoutTasktypeInput[] | TaskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTasktypeInput | TaskCreateOrConnectWithoutTasktypeInput[]
    createMany?: TaskCreateManyTasktypeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTasktypeInput = {
    create?: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput> | TaskCreateWithoutTasktypeInput[] | TaskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTasktypeInput | TaskCreateOrConnectWithoutTasktypeInput[]
    createMany?: TaskCreateManyTasktypeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutTasktypeNestedInput = {
    create?: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput> | TaskCreateWithoutTasktypeInput[] | TaskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTasktypeInput | TaskCreateOrConnectWithoutTasktypeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTasktypeInput | TaskUpsertWithWhereUniqueWithoutTasktypeInput[]
    createMany?: TaskCreateManyTasktypeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTasktypeInput | TaskUpdateWithWhereUniqueWithoutTasktypeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTasktypeInput | TaskUpdateManyWithWhereWithoutTasktypeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTasktypeNestedInput = {
    create?: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput> | TaskCreateWithoutTasktypeInput[] | TaskUncheckedCreateWithoutTasktypeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTasktypeInput | TaskCreateOrConnectWithoutTasktypeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTasktypeInput | TaskUpsertWithWhereUniqueWithoutTasktypeInput[]
    createMany?: TaskCreateManyTasktypeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTasktypeInput | TaskUpdateWithWhereUniqueWithoutTasktypeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTasktypeInput | TaskUpdateManyWithWhereWithoutTasktypeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput> | TaskCreateWithoutWorkflowInput[] | TaskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkflowInput | TaskCreateOrConnectWithoutWorkflowInput[]
    createMany?: TaskCreateManyWorkflowInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskcategoryCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput> | TaskcategoryCreateWithoutWorkflowInput[] | TaskcategoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutWorkflowInput | TaskcategoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: TaskcategoryCreateManyWorkflowInputEnvelope
    connect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput> | TaskCreateWithoutWorkflowInput[] | TaskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkflowInput | TaskCreateOrConnectWithoutWorkflowInput[]
    createMany?: TaskCreateManyWorkflowInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskcategoryUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput> | TaskcategoryCreateWithoutWorkflowInput[] | TaskcategoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutWorkflowInput | TaskcategoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: TaskcategoryCreateManyWorkflowInputEnvelope
    connect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput> | TaskCreateWithoutWorkflowInput[] | TaskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkflowInput | TaskCreateOrConnectWithoutWorkflowInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkflowInput | TaskUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TaskCreateManyWorkflowInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkflowInput | TaskUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkflowInput | TaskUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskcategoryUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput> | TaskcategoryCreateWithoutWorkflowInput[] | TaskcategoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutWorkflowInput | TaskcategoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: TaskcategoryUpsertWithWhereUniqueWithoutWorkflowInput | TaskcategoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TaskcategoryCreateManyWorkflowInputEnvelope
    set?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    disconnect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    delete?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    connect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    update?: TaskcategoryUpdateWithWhereUniqueWithoutWorkflowInput | TaskcategoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TaskcategoryUpdateManyWithWhereWithoutWorkflowInput | TaskcategoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TaskcategoryScalarWhereInput | TaskcategoryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput> | TaskCreateWithoutWorkflowInput[] | TaskUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkflowInput | TaskCreateOrConnectWithoutWorkflowInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkflowInput | TaskUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TaskCreateManyWorkflowInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkflowInput | TaskUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkflowInput | TaskUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskcategoryUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput> | TaskcategoryCreateWithoutWorkflowInput[] | TaskcategoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutWorkflowInput | TaskcategoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: TaskcategoryUpsertWithWhereUniqueWithoutWorkflowInput | TaskcategoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TaskcategoryCreateManyWorkflowInputEnvelope
    set?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    disconnect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    delete?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    connect?: TaskcategoryWhereUniqueInput | TaskcategoryWhereUniqueInput[]
    update?: TaskcategoryUpdateWithWhereUniqueWithoutWorkflowInput | TaskcategoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TaskcategoryUpdateManyWithWhereWithoutWorkflowInput | TaskcategoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TaskcategoryScalarWhereInput | TaskcategoryScalarWhereInput[]
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

  export type TaskCreateWithoutProglanguageInput = {
    id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    tasktype: TasktypeCreateNestedOneWithoutTaskInput
    workflow: WorkflowCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProglanguageInput = {
    id: string
    tasktype_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskCreateOrConnectWithoutProglanguageInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput>
  }

  export type TaskCreateManyProglanguageInputEnvelope = {
    data: TaskCreateManyProglanguageInput | TaskCreateManyProglanguageInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type TemplateUncheckedCreateWithoutProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type TemplateCreateOrConnectWithoutProglanguageInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput>
  }

  export type TemplateCreateManyProglanguageInputEnvelope = {
    data: TemplateCreateManyProglanguageInput | TemplateCreateManyProglanguageInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutProglanguageInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProglanguageInput, TaskUncheckedUpdateWithoutProglanguageInput>
    create: XOR<TaskCreateWithoutProglanguageInput, TaskUncheckedCreateWithoutProglanguageInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProglanguageInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProglanguageInput, TaskUncheckedUpdateWithoutProglanguageInput>
  }

  export type TaskUpdateManyWithWhereWithoutProglanguageInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProglanguageInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    proglanguage_id?: StringFilter<"Task"> | string
    tasktype_id?: StringFilter<"Task"> | string
    workflow_id?: StringFilter<"Task"> | string
    taskcategory_id?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
  }

  export type TemplateUpsertWithWhereUniqueWithoutProglanguageInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutProglanguageInput, TemplateUncheckedUpdateWithoutProglanguageInput>
    create: XOR<TemplateCreateWithoutProglanguageInput, TemplateUncheckedCreateWithoutProglanguageInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutProglanguageInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutProglanguageInput, TemplateUncheckedUpdateWithoutProglanguageInput>
  }

  export type TemplateUpdateManyWithWhereWithoutProglanguageInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutProglanguageInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    proglanguage_id?: StringFilter<"Template"> | string
    datacode?: StringFilter<"Template"> | string
  }

  export type ProglanguageCreateWithoutTemplatesInput = {
    id: string
    name: string
    task?: TaskCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageUncheckedCreateWithoutTemplatesInput = {
    id: string
    name: string
    task?: TaskUncheckedCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageCreateOrConnectWithoutTemplatesInput = {
    where: ProglanguageWhereUniqueInput
    create: XOR<ProglanguageCreateWithoutTemplatesInput, ProglanguageUncheckedCreateWithoutTemplatesInput>
  }

  export type ProglanguageUpsertWithoutTemplatesInput = {
    update: XOR<ProglanguageUpdateWithoutTemplatesInput, ProglanguageUncheckedUpdateWithoutTemplatesInput>
    create: XOR<ProglanguageCreateWithoutTemplatesInput, ProglanguageUncheckedCreateWithoutTemplatesInput>
    where?: ProglanguageWhereInput
  }

  export type ProglanguageUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: ProglanguageWhereInput
    data: XOR<ProglanguageUpdateWithoutTemplatesInput, ProglanguageUncheckedUpdateWithoutTemplatesInput>
  }

  export type ProglanguageUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateManyWithoutProglanguageNestedInput
  }

  export type ProglanguageUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    task?: TaskUncheckedUpdateManyWithoutProglanguageNestedInput
  }

  export type ProglanguageCreateWithoutTaskInput = {
    id: string
    name: string
    templates?: TemplateCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageUncheckedCreateWithoutTaskInput = {
    id: string
    name: string
    templates?: TemplateUncheckedCreateNestedManyWithoutProglanguageInput
  }

  export type ProglanguageCreateOrConnectWithoutTaskInput = {
    where: ProglanguageWhereUniqueInput
    create: XOR<ProglanguageCreateWithoutTaskInput, ProglanguageUncheckedCreateWithoutTaskInput>
  }

  export type TasktypeCreateWithoutTaskInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TasktypeUncheckedCreateWithoutTaskInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TasktypeCreateOrConnectWithoutTaskInput = {
    where: TasktypeWhereUniqueInput
    create: XOR<TasktypeCreateWithoutTaskInput, TasktypeUncheckedCreateWithoutTaskInput>
  }

  export type WorkflowCreateWithoutTaskInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    taskcategory?: TaskcategoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTaskInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    taskcategory?: TaskcategoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTaskInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
  }

  export type ProglanguageUpsertWithoutTaskInput = {
    update: XOR<ProglanguageUpdateWithoutTaskInput, ProglanguageUncheckedUpdateWithoutTaskInput>
    create: XOR<ProglanguageCreateWithoutTaskInput, ProglanguageUncheckedCreateWithoutTaskInput>
    where?: ProglanguageWhereInput
  }

  export type ProglanguageUpdateToOneWithWhereWithoutTaskInput = {
    where?: ProglanguageWhereInput
    data: XOR<ProglanguageUpdateWithoutTaskInput, ProglanguageUncheckedUpdateWithoutTaskInput>
  }

  export type ProglanguageUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    templates?: TemplateUpdateManyWithoutProglanguageNestedInput
  }

  export type ProglanguageUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    templates?: TemplateUncheckedUpdateManyWithoutProglanguageNestedInput
  }

  export type TasktypeUpsertWithoutTaskInput = {
    update: XOR<TasktypeUpdateWithoutTaskInput, TasktypeUncheckedUpdateWithoutTaskInput>
    create: XOR<TasktypeCreateWithoutTaskInput, TasktypeUncheckedCreateWithoutTaskInput>
    where?: TasktypeWhereInput
  }

  export type TasktypeUpdateToOneWithWhereWithoutTaskInput = {
    where?: TasktypeWhereInput
    data: XOR<TasktypeUpdateWithoutTaskInput, TasktypeUncheckedUpdateWithoutTaskInput>
  }

  export type TasktypeUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasktypeUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowUpsertWithoutTaskInput = {
    update: XOR<WorkflowUpdateWithoutTaskInput, WorkflowUncheckedUpdateWithoutTaskInput>
    create: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTaskInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTaskInput, WorkflowUncheckedUpdateWithoutTaskInput>
  }

  export type WorkflowUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    taskcategory?: TaskcategoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    taskcategory?: TaskcategoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutTaskcategoryInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    task?: TaskCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTaskcategoryInput = {
    id: string
    name: string
    description?: string | null
    context?: string | null
    application?: string | null
    fpath?: string | null
    updated?: Date | string
    task?: TaskUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTaskcategoryInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTaskcategoryInput, WorkflowUncheckedCreateWithoutTaskcategoryInput>
  }

  export type WorkflowUpsertWithoutTaskcategoryInput = {
    update: XOR<WorkflowUpdateWithoutTaskcategoryInput, WorkflowUncheckedUpdateWithoutTaskcategoryInput>
    create: XOR<WorkflowCreateWithoutTaskcategoryInput, WorkflowUncheckedCreateWithoutTaskcategoryInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTaskcategoryInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTaskcategoryInput, WorkflowUncheckedUpdateWithoutTaskcategoryInput>
  }

  export type WorkflowUpdateWithoutTaskcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTaskcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    context?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type TaskCreateWithoutTasktypeInput = {
    id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    proglanguage: ProglanguageCreateNestedOneWithoutTaskInput
    workflow: WorkflowCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTasktypeInput = {
    id: string
    proglanguage_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskCreateOrConnectWithoutTasktypeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput>
  }

  export type TaskCreateManyTasktypeInputEnvelope = {
    data: TaskCreateManyTasktypeInput | TaskCreateManyTasktypeInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutTasktypeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTasktypeInput, TaskUncheckedUpdateWithoutTasktypeInput>
    create: XOR<TaskCreateWithoutTasktypeInput, TaskUncheckedCreateWithoutTasktypeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTasktypeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTasktypeInput, TaskUncheckedUpdateWithoutTasktypeInput>
  }

  export type TaskUpdateManyWithWhereWithoutTasktypeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasktypeInput>
  }

  export type TaskCreateWithoutWorkflowInput = {
    id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    proglanguage: ProglanguageCreateNestedOneWithoutTaskInput
    tasktype: TasktypeCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutWorkflowInput = {
    id: string
    proglanguage_id: string
    tasktype_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskCreateOrConnectWithoutWorkflowInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput>
  }

  export type TaskCreateManyWorkflowInputEnvelope = {
    data: TaskCreateManyWorkflowInput | TaskCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type TaskcategoryCreateWithoutWorkflowInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TaskcategoryUncheckedCreateWithoutWorkflowInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TaskcategoryCreateOrConnectWithoutWorkflowInput = {
    where: TaskcategoryWhereUniqueInput
    create: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput>
  }

  export type TaskcategoryCreateManyWorkflowInputEnvelope = {
    data: TaskcategoryCreateManyWorkflowInput | TaskcategoryCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutWorkflowInput, TaskUncheckedUpdateWithoutWorkflowInput>
    create: XOR<TaskCreateWithoutWorkflowInput, TaskUncheckedCreateWithoutWorkflowInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutWorkflowInput, TaskUncheckedUpdateWithoutWorkflowInput>
  }

  export type TaskUpdateManyWithWhereWithoutWorkflowInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type TaskcategoryUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: TaskcategoryWhereUniqueInput
    update: XOR<TaskcategoryUpdateWithoutWorkflowInput, TaskcategoryUncheckedUpdateWithoutWorkflowInput>
    create: XOR<TaskcategoryCreateWithoutWorkflowInput, TaskcategoryUncheckedCreateWithoutWorkflowInput>
  }

  export type TaskcategoryUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: TaskcategoryWhereUniqueInput
    data: XOR<TaskcategoryUpdateWithoutWorkflowInput, TaskcategoryUncheckedUpdateWithoutWorkflowInput>
  }

  export type TaskcategoryUpdateManyWithWhereWithoutWorkflowInput = {
    where: TaskcategoryScalarWhereInput
    data: XOR<TaskcategoryUpdateManyMutationInput, TaskcategoryUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type TaskcategoryScalarWhereInput = {
    AND?: TaskcategoryScalarWhereInput | TaskcategoryScalarWhereInput[]
    OR?: TaskcategoryScalarWhereInput[]
    NOT?: TaskcategoryScalarWhereInput | TaskcategoryScalarWhereInput[]
    id?: StringFilter<"Taskcategory"> | string
    workflow_id?: StringFilter<"Taskcategory"> | string
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
  }

  export type TaskCreateManyProglanguageInput = {
    id: string
    tasktype_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TemplateCreateManyProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type TaskUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    tasktype?: TasktypeUpdateOneRequiredWithoutTaskNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyTasktypeInput = {
    id: string
    proglanguage_id: string
    workflow_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateWithoutTasktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    proglanguage?: ProglanguageUpdateOneRequiredWithoutTaskNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTasktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutTasktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    workflow_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyWorkflowInput = {
    id: string
    proglanguage_id: string
    tasktype_id: string
    taskcategory_id: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskcategoryCreateManyWorkflowInput = {
    id: string
    name: string
    description?: string | null
  }

  export type TaskUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    proglanguage?: ProglanguageUpdateOneRequiredWithoutTaskNestedInput
    tasktype?: TasktypeUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    tasktype_id?: StringFieldUpdateOperationsInput | string
    taskcategory_id?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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