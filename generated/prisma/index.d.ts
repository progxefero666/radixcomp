
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
 * Model Codelang
 * 
 */
export type Codelang = $Result.DefaultSelection<Prisma.$CodelangPayload>
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
 * Model Taskcategory
 * 
 */
export type Taskcategory = $Result.DefaultSelection<Prisma.$TaskcategoryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Apptype
 * 
 */
export type Apptype = $Result.DefaultSelection<Prisma.$ApptypePayload>
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
 * // Fetch zero or more Codelangs
 * const codelangs = await prisma.codelang.findMany()
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
   * // Fetch zero or more Codelangs
   * const codelangs = await prisma.codelang.findMany()
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
   * `prisma.codelang`: Exposes CRUD operations for the **Codelang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codelangs
    * const codelangs = await prisma.codelang.findMany()
    * ```
    */
  get codelang(): Prisma.CodelangDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apptype`: Exposes CRUD operations for the **Apptype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apptypes
    * const apptypes = await prisma.apptype.findMany()
    * ```
    */
  get apptype(): Prisma.ApptypeDelegate<ExtArgs, ClientOptions>;

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
    Codelang: 'Codelang',
    Tasktype: 'Tasktype',
    Workflow: 'Workflow',
    Taskcategory: 'Taskcategory',
    Task: 'Task',
    Apptype: 'Apptype',
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
      modelProps: "codelang" | "tasktype" | "workflow" | "taskcategory" | "task" | "apptype" | "application"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Codelang: {
        payload: Prisma.$CodelangPayload<ExtArgs>
        fields: Prisma.CodelangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodelangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodelangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          findFirst: {
            args: Prisma.CodelangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodelangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          findMany: {
            args: Prisma.CodelangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>[]
          }
          create: {
            args: Prisma.CodelangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          createMany: {
            args: Prisma.CodelangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodelangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>[]
          }
          delete: {
            args: Prisma.CodelangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          update: {
            args: Prisma.CodelangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          deleteMany: {
            args: Prisma.CodelangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodelangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodelangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>[]
          }
          upsert: {
            args: Prisma.CodelangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodelangPayload>
          }
          aggregate: {
            args: Prisma.CodelangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodelang>
          }
          groupBy: {
            args: Prisma.CodelangGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodelangGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodelangCountArgs<ExtArgs>
            result: $Utils.Optional<CodelangCountAggregateOutputType> | number
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
      Apptype: {
        payload: Prisma.$ApptypePayload<ExtArgs>
        fields: Prisma.ApptypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApptypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApptypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          findFirst: {
            args: Prisma.ApptypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApptypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          findMany: {
            args: Prisma.ApptypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>[]
          }
          create: {
            args: Prisma.ApptypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          createMany: {
            args: Prisma.ApptypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApptypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>[]
          }
          delete: {
            args: Prisma.ApptypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          update: {
            args: Prisma.ApptypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          deleteMany: {
            args: Prisma.ApptypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApptypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApptypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>[]
          }
          upsert: {
            args: Prisma.ApptypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApptypePayload>
          }
          aggregate: {
            args: Prisma.ApptypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApptype>
          }
          groupBy: {
            args: Prisma.ApptypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApptypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApptypeCountArgs<ExtArgs>
            result: $Utils.Optional<ApptypeCountAggregateOutputType> | number
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
    codelang?: CodelangOmit
    tasktype?: TasktypeOmit
    workflow?: WorkflowOmit
    taskcategory?: TaskcategoryOmit
    task?: TaskOmit
    apptype?: ApptypeOmit
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
   * Count Type CodelangCountOutputType
   */

  export type CodelangCountOutputType = {
    tasks: number
    applications: number
  }

  export type CodelangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CodelangCountOutputTypeCountTasksArgs
    applications?: boolean | CodelangCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * CodelangCountOutputType without action
   */
  export type CodelangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodelangCountOutputType
     */
    select?: CodelangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodelangCountOutputType without action
   */
  export type CodelangCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * CodelangCountOutputType without action
   */
  export type CodelangCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type TasktypeCountOutputType
   */

  export type TasktypeCountOutputType = {
    tasks: number
  }

  export type TasktypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TasktypeCountOutputTypeCountTasksArgs
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
  export type TasktypeCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    tasks: number
    taskcategorys: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | WorkflowCountOutputTypeCountTasksArgs
    taskcategorys?: boolean | WorkflowCountOutputTypeCountTaskcategorysArgs
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
    where?: TaskWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountTaskcategorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcategoryWhereInput
  }


  /**
   * Count Type TaskcategoryCountOutputType
   */

  export type TaskcategoryCountOutputType = {
    tasks: number
  }

  export type TaskcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskcategoryCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskcategoryCountOutputType without action
   */
  export type TaskcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskcategoryCountOutputType
     */
    select?: TaskcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskcategoryCountOutputType without action
   */
  export type TaskcategoryCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ApptypeCountOutputType
   */

  export type ApptypeCountOutputType = {
    applications: number
  }

  export type ApptypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ApptypeCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ApptypeCountOutputType without action
   */
  export type ApptypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApptypeCountOutputType
     */
    select?: ApptypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApptypeCountOutputType without action
   */
  export type ApptypeCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Codelang
   */

  export type AggregateCodelang = {
    _count: CodelangCountAggregateOutputType | null
    _avg: CodelangAvgAggregateOutputType | null
    _sum: CodelangSumAggregateOutputType | null
    _min: CodelangMinAggregateOutputType | null
    _max: CodelangMaxAggregateOutputType | null
  }

  export type CodelangAvgAggregateOutputType = {
    id: number | null
  }

  export type CodelangSumAggregateOutputType = {
    id: number | null
  }

  export type CodelangMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CodelangMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CodelangCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CodelangAvgAggregateInputType = {
    id?: true
  }

  export type CodelangSumAggregateInputType = {
    id?: true
  }

  export type CodelangMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CodelangMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CodelangCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CodelangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codelang to aggregate.
     */
    where?: CodelangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codelangs to fetch.
     */
    orderBy?: CodelangOrderByWithRelationInput | CodelangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodelangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codelangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codelangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codelangs
    **/
    _count?: true | CodelangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodelangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodelangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodelangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodelangMaxAggregateInputType
  }

  export type GetCodelangAggregateType<T extends CodelangAggregateArgs> = {
        [P in keyof T & keyof AggregateCodelang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodelang[P]>
      : GetScalarType<T[P], AggregateCodelang[P]>
  }




  export type CodelangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodelangWhereInput
    orderBy?: CodelangOrderByWithAggregationInput | CodelangOrderByWithAggregationInput[]
    by: CodelangScalarFieldEnum[] | CodelangScalarFieldEnum
    having?: CodelangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodelangCountAggregateInputType | true
    _avg?: CodelangAvgAggregateInputType
    _sum?: CodelangSumAggregateInputType
    _min?: CodelangMinAggregateInputType
    _max?: CodelangMaxAggregateInputType
  }

  export type CodelangGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CodelangCountAggregateOutputType | null
    _avg: CodelangAvgAggregateOutputType | null
    _sum: CodelangSumAggregateOutputType | null
    _min: CodelangMinAggregateOutputType | null
    _max: CodelangMaxAggregateOutputType | null
  }

  type GetCodelangGroupByPayload<T extends CodelangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodelangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodelangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodelangGroupByOutputType[P]>
            : GetScalarType<T[P], CodelangGroupByOutputType[P]>
        }
      >
    >


  export type CodelangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tasks?: boolean | Codelang$tasksArgs<ExtArgs>
    applications?: boolean | Codelang$applicationsArgs<ExtArgs>
    _count?: boolean | CodelangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codelang"]>

  export type CodelangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["codelang"]>

  export type CodelangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["codelang"]>

  export type CodelangSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CodelangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["codelang"]>
  export type CodelangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Codelang$tasksArgs<ExtArgs>
    applications?: boolean | Codelang$applicationsArgs<ExtArgs>
    _count?: boolean | CodelangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodelangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CodelangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CodelangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Codelang"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["codelang"]>
    composites: {}
  }

  type CodelangGetPayload<S extends boolean | null | undefined | CodelangDefaultArgs> = $Result.GetResult<Prisma.$CodelangPayload, S>

  type CodelangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodelangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodelangCountAggregateInputType | true
    }

  export interface CodelangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Codelang'], meta: { name: 'Codelang' } }
    /**
     * Find zero or one Codelang that matches the filter.
     * @param {CodelangFindUniqueArgs} args - Arguments to find a Codelang
     * @example
     * // Get one Codelang
     * const codelang = await prisma.codelang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodelangFindUniqueArgs>(args: SelectSubset<T, CodelangFindUniqueArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Codelang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodelangFindUniqueOrThrowArgs} args - Arguments to find a Codelang
     * @example
     * // Get one Codelang
     * const codelang = await prisma.codelang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodelangFindUniqueOrThrowArgs>(args: SelectSubset<T, CodelangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codelang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangFindFirstArgs} args - Arguments to find a Codelang
     * @example
     * // Get one Codelang
     * const codelang = await prisma.codelang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodelangFindFirstArgs>(args?: SelectSubset<T, CodelangFindFirstArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codelang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangFindFirstOrThrowArgs} args - Arguments to find a Codelang
     * @example
     * // Get one Codelang
     * const codelang = await prisma.codelang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodelangFindFirstOrThrowArgs>(args?: SelectSubset<T, CodelangFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codelangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codelangs
     * const codelangs = await prisma.codelang.findMany()
     * 
     * // Get first 10 Codelangs
     * const codelangs = await prisma.codelang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codelangWithIdOnly = await prisma.codelang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodelangFindManyArgs>(args?: SelectSubset<T, CodelangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Codelang.
     * @param {CodelangCreateArgs} args - Arguments to create a Codelang.
     * @example
     * // Create one Codelang
     * const Codelang = await prisma.codelang.create({
     *   data: {
     *     // ... data to create a Codelang
     *   }
     * })
     * 
     */
    create<T extends CodelangCreateArgs>(args: SelectSubset<T, CodelangCreateArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codelangs.
     * @param {CodelangCreateManyArgs} args - Arguments to create many Codelangs.
     * @example
     * // Create many Codelangs
     * const codelang = await prisma.codelang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodelangCreateManyArgs>(args?: SelectSubset<T, CodelangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codelangs and returns the data saved in the database.
     * @param {CodelangCreateManyAndReturnArgs} args - Arguments to create many Codelangs.
     * @example
     * // Create many Codelangs
     * const codelang = await prisma.codelang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codelangs and only return the `id`
     * const codelangWithIdOnly = await prisma.codelang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodelangCreateManyAndReturnArgs>(args?: SelectSubset<T, CodelangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Codelang.
     * @param {CodelangDeleteArgs} args - Arguments to delete one Codelang.
     * @example
     * // Delete one Codelang
     * const Codelang = await prisma.codelang.delete({
     *   where: {
     *     // ... filter to delete one Codelang
     *   }
     * })
     * 
     */
    delete<T extends CodelangDeleteArgs>(args: SelectSubset<T, CodelangDeleteArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Codelang.
     * @param {CodelangUpdateArgs} args - Arguments to update one Codelang.
     * @example
     * // Update one Codelang
     * const codelang = await prisma.codelang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodelangUpdateArgs>(args: SelectSubset<T, CodelangUpdateArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codelangs.
     * @param {CodelangDeleteManyArgs} args - Arguments to filter Codelangs to delete.
     * @example
     * // Delete a few Codelangs
     * const { count } = await prisma.codelang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodelangDeleteManyArgs>(args?: SelectSubset<T, CodelangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codelangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codelangs
     * const codelang = await prisma.codelang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodelangUpdateManyArgs>(args: SelectSubset<T, CodelangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codelangs and returns the data updated in the database.
     * @param {CodelangUpdateManyAndReturnArgs} args - Arguments to update many Codelangs.
     * @example
     * // Update many Codelangs
     * const codelang = await prisma.codelang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codelangs and only return the `id`
     * const codelangWithIdOnly = await prisma.codelang.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodelangUpdateManyAndReturnArgs>(args: SelectSubset<T, CodelangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Codelang.
     * @param {CodelangUpsertArgs} args - Arguments to update or create a Codelang.
     * @example
     * // Update or create a Codelang
     * const codelang = await prisma.codelang.upsert({
     *   create: {
     *     // ... data to create a Codelang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Codelang we want to update
     *   }
     * })
     */
    upsert<T extends CodelangUpsertArgs>(args: SelectSubset<T, CodelangUpsertArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codelangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangCountArgs} args - Arguments to filter Codelangs to count.
     * @example
     * // Count the number of Codelangs
     * const count = await prisma.codelang.count({
     *   where: {
     *     // ... the filter for the Codelangs we want to count
     *   }
     * })
    **/
    count<T extends CodelangCountArgs>(
      args?: Subset<T, CodelangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodelangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Codelang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodelangAggregateArgs>(args: Subset<T, CodelangAggregateArgs>): Prisma.PrismaPromise<GetCodelangAggregateType<T>>

    /**
     * Group by Codelang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodelangGroupByArgs} args - Group by arguments.
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
      T extends CodelangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodelangGroupByArgs['orderBy'] }
        : { orderBy?: CodelangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodelangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodelangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Codelang model
   */
  readonly fields: CodelangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Codelang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodelangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Codelang$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Codelang$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Codelang$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Codelang$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Codelang model
   */
  interface CodelangFieldRefs {
    readonly id: FieldRef<"Codelang", 'Int'>
    readonly name: FieldRef<"Codelang", 'String'>
    readonly description: FieldRef<"Codelang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Codelang findUnique
   */
  export type CodelangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter, which Codelang to fetch.
     */
    where: CodelangWhereUniqueInput
  }

  /**
   * Codelang findUniqueOrThrow
   */
  export type CodelangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter, which Codelang to fetch.
     */
    where: CodelangWhereUniqueInput
  }

  /**
   * Codelang findFirst
   */
  export type CodelangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter, which Codelang to fetch.
     */
    where?: CodelangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codelangs to fetch.
     */
    orderBy?: CodelangOrderByWithRelationInput | CodelangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codelangs.
     */
    cursor?: CodelangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codelangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codelangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codelangs.
     */
    distinct?: CodelangScalarFieldEnum | CodelangScalarFieldEnum[]
  }

  /**
   * Codelang findFirstOrThrow
   */
  export type CodelangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter, which Codelang to fetch.
     */
    where?: CodelangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codelangs to fetch.
     */
    orderBy?: CodelangOrderByWithRelationInput | CodelangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codelangs.
     */
    cursor?: CodelangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codelangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codelangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codelangs.
     */
    distinct?: CodelangScalarFieldEnum | CodelangScalarFieldEnum[]
  }

  /**
   * Codelang findMany
   */
  export type CodelangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter, which Codelangs to fetch.
     */
    where?: CodelangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codelangs to fetch.
     */
    orderBy?: CodelangOrderByWithRelationInput | CodelangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codelangs.
     */
    cursor?: CodelangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codelangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codelangs.
     */
    skip?: number
    distinct?: CodelangScalarFieldEnum | CodelangScalarFieldEnum[]
  }

  /**
   * Codelang create
   */
  export type CodelangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * The data needed to create a Codelang.
     */
    data: XOR<CodelangCreateInput, CodelangUncheckedCreateInput>
  }

  /**
   * Codelang createMany
   */
  export type CodelangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codelangs.
     */
    data: CodelangCreateManyInput | CodelangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Codelang createManyAndReturn
   */
  export type CodelangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * The data used to create many Codelangs.
     */
    data: CodelangCreateManyInput | CodelangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Codelang update
   */
  export type CodelangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * The data needed to update a Codelang.
     */
    data: XOR<CodelangUpdateInput, CodelangUncheckedUpdateInput>
    /**
     * Choose, which Codelang to update.
     */
    where: CodelangWhereUniqueInput
  }

  /**
   * Codelang updateMany
   */
  export type CodelangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codelangs.
     */
    data: XOR<CodelangUpdateManyMutationInput, CodelangUncheckedUpdateManyInput>
    /**
     * Filter which Codelangs to update
     */
    where?: CodelangWhereInput
    /**
     * Limit how many Codelangs to update.
     */
    limit?: number
  }

  /**
   * Codelang updateManyAndReturn
   */
  export type CodelangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * The data used to update Codelangs.
     */
    data: XOR<CodelangUpdateManyMutationInput, CodelangUncheckedUpdateManyInput>
    /**
     * Filter which Codelangs to update
     */
    where?: CodelangWhereInput
    /**
     * Limit how many Codelangs to update.
     */
    limit?: number
  }

  /**
   * Codelang upsert
   */
  export type CodelangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * The filter to search for the Codelang to update in case it exists.
     */
    where: CodelangWhereUniqueInput
    /**
     * In case the Codelang found by the `where` argument doesn't exist, create a new Codelang with this data.
     */
    create: XOR<CodelangCreateInput, CodelangUncheckedCreateInput>
    /**
     * In case the Codelang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodelangUpdateInput, CodelangUncheckedUpdateInput>
  }

  /**
   * Codelang delete
   */
  export type CodelangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
    /**
     * Filter which Codelang to delete.
     */
    where: CodelangWhereUniqueInput
  }

  /**
   * Codelang deleteMany
   */
  export type CodelangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codelangs to delete
     */
    where?: CodelangWhereInput
    /**
     * Limit how many Codelangs to delete.
     */
    limit?: number
  }

  /**
   * Codelang.tasks
   */
  export type Codelang$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Codelang.applications
   */
  export type Codelang$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Codelang without action
   */
  export type CodelangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codelang
     */
    select?: CodelangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codelang
     */
    omit?: CodelangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodelangInclude<ExtArgs> | null
  }


  /**
   * Model Tasktype
   */

  export type AggregateTasktype = {
    _count: TasktypeCountAggregateOutputType | null
    _avg: TasktypeAvgAggregateOutputType | null
    _sum: TasktypeSumAggregateOutputType | null
    _min: TasktypeMinAggregateOutputType | null
    _max: TasktypeMaxAggregateOutputType | null
  }

  export type TasktypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TasktypeSumAggregateOutputType = {
    id: number | null
  }

  export type TasktypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TasktypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TasktypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TasktypeAvgAggregateInputType = {
    id?: true
  }

  export type TasktypeSumAggregateInputType = {
    id?: true
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
     * Select which fields to average
    **/
    _avg?: TasktypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasktypeSumAggregateInputType
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
    _avg?: TasktypeAvgAggregateInputType
    _sum?: TasktypeSumAggregateInputType
    _min?: TasktypeMinAggregateInputType
    _max?: TasktypeMaxAggregateInputType
  }

  export type TasktypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: TasktypeCountAggregateOutputType | null
    _avg: TasktypeAvgAggregateOutputType | null
    _sum: TasktypeSumAggregateOutputType | null
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
    tasks?: boolean | Tasktype$tasksArgs<ExtArgs>
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
    tasks?: boolean | Tasktype$tasksArgs<ExtArgs>
    _count?: boolean | TasktypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TasktypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TasktypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TasktypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasktype"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
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
    tasks<T extends Tasktype$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tasktype$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Tasktype", 'Int'>
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
   * Tasktype.tasks
   */
  export type Tasktype$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    name: string | null
    context: string | null
    description: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: number | null
    name: string | null
    context: string | null
    description: string | null
    application: string | null
    fpath: string | null
    updated: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    context: number
    description: number
    application: number
    fpath: number
    updated: number
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
    name?: true
    context?: true
    description?: true
    application?: true
    fpath?: true
    updated?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    context?: true
    description?: true
    application?: true
    fpath?: true
    updated?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    context?: true
    description?: true
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
    name: string
    context: string | null
    description: string | null
    application: string | null
    fpath: string | null
    updated: Date
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
    name?: boolean
    context?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
    tasks?: boolean | Workflow$tasksArgs<ExtArgs>
    taskcategorys?: boolean | Workflow$taskcategorysArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    context?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    context?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    context?: boolean
    description?: boolean
    application?: boolean
    fpath?: boolean
    updated?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "context" | "description" | "application" | "fpath" | "updated", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Workflow$tasksArgs<ExtArgs>
    taskcategorys?: boolean | Workflow$taskcategorysArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      taskcategorys: Prisma.$TaskcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      context: string | null
      description: string | null
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
    tasks<T extends Workflow$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskcategorys<T extends Workflow$taskcategorysArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$taskcategorysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Workflow", 'String'>
    readonly context: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
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
   * Workflow.tasks
   */
  export type Workflow$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Workflow.taskcategorys
   */
  export type Workflow$taskcategorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Taskcategory
   */

  export type AggregateTaskcategory = {
    _count: TaskcategoryCountAggregateOutputType | null
    _avg: TaskcategoryAvgAggregateOutputType | null
    _sum: TaskcategorySumAggregateOutputType | null
    _min: TaskcategoryMinAggregateOutputType | null
    _max: TaskcategoryMaxAggregateOutputType | null
  }

  export type TaskcategoryAvgAggregateOutputType = {
    id: number | null
    workflowId: number | null
  }

  export type TaskcategorySumAggregateOutputType = {
    id: number | null
    workflowId: number | null
  }

  export type TaskcategoryMinAggregateOutputType = {
    id: number | null
    workflowId: number | null
    name: string | null
    description: string | null
  }

  export type TaskcategoryMaxAggregateOutputType = {
    id: number | null
    workflowId: number | null
    name: string | null
    description: string | null
  }

  export type TaskcategoryCountAggregateOutputType = {
    id: number
    workflowId: number
    name: number
    description: number
    _all: number
  }


  export type TaskcategoryAvgAggregateInputType = {
    id?: true
    workflowId?: true
  }

  export type TaskcategorySumAggregateInputType = {
    id?: true
    workflowId?: true
  }

  export type TaskcategoryMinAggregateInputType = {
    id?: true
    workflowId?: true
    name?: true
    description?: true
  }

  export type TaskcategoryMaxAggregateInputType = {
    id?: true
    workflowId?: true
    name?: true
    description?: true
  }

  export type TaskcategoryCountAggregateInputType = {
    id?: true
    workflowId?: true
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
     * Select which fields to average
    **/
    _avg?: TaskcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskcategorySumAggregateInputType
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
    _avg?: TaskcategoryAvgAggregateInputType
    _sum?: TaskcategorySumAggregateInputType
    _min?: TaskcategoryMinAggregateInputType
    _max?: TaskcategoryMaxAggregateInputType
  }

  export type TaskcategoryGroupByOutputType = {
    id: number
    workflowId: number
    name: string
    description: string | null
    _count: TaskcategoryCountAggregateOutputType | null
    _avg: TaskcategoryAvgAggregateOutputType | null
    _sum: TaskcategorySumAggregateOutputType | null
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
    workflowId?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    tasks?: boolean | Taskcategory$tasksArgs<ExtArgs>
    _count?: boolean | TaskcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    name?: boolean
    description?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskcategory"]>

  export type TaskcategorySelectScalar = {
    id?: boolean
    workflowId?: boolean
    name?: boolean
    description?: boolean
  }

  export type TaskcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "name" | "description", ExtArgs["result"]["taskcategory"]>
  export type TaskcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    tasks?: boolean | Taskcategory$tasksArgs<ExtArgs>
    _count?: boolean | TaskcategoryCountOutputTypeDefaultArgs<ExtArgs>
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
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workflowId: number
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
    tasks<T extends Taskcategory$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Taskcategory$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Taskcategory", 'Int'>
    readonly workflowId: FieldRef<"Taskcategory", 'Int'>
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
   * Taskcategory.tasks
   */
  export type Taskcategory$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    taskcategoryId: number | null
    orden: number | null
    tkgroup: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    taskcategoryId: number | null
    orden: number | null
    tkgroup: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    taskcategoryId: number | null
    orden: number | null
    name: string | null
    tkgroup: number | null
    description: string | null
    files: string | null
    folders: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    tasktypeId: number | null
    codelangId: number | null
    workflowId: number | null
    taskcategoryId: number | null
    orden: number | null
    name: string | null
    tkgroup: number | null
    description: string | null
    files: string | null
    folders: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: number
    tkgroup: number
    description: number
    files: number
    folders: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    taskcategoryId?: true
    orden?: true
    tkgroup?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    taskcategoryId?: true
    orden?: true
    tkgroup?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    taskcategoryId?: true
    orden?: true
    name?: true
    tkgroup?: true
    description?: true
    files?: true
    folders?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    taskcategoryId?: true
    orden?: true
    name?: true
    tkgroup?: true
    description?: true
    files?: true
    folders?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    tasktypeId?: true
    codelangId?: true
    workflowId?: true
    taskcategoryId?: true
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
    id: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
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
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    taskcategoryId?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    taskcategoryId?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    taskcategoryId?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    tasktypeId?: boolean
    codelangId?: boolean
    workflowId?: boolean
    taskcategoryId?: boolean
    orden?: boolean
    name?: boolean
    tkgroup?: boolean
    description?: boolean
    files?: boolean
    folders?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tasktypeId" | "codelangId" | "workflowId" | "taskcategoryId" | "orden" | "name" | "tkgroup" | "description" | "files" | "folders", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktype?: boolean | TasktypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    taskcategory?: boolean | TaskcategoryDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      tasktype: Prisma.$TasktypePayload<ExtArgs>
      codelang: Prisma.$CodelangPayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      taskcategory: Prisma.$TaskcategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tasktypeId: number
      codelangId: number
      workflowId: number
      taskcategoryId: number
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
    tasktype<T extends TasktypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasktypeDefaultArgs<ExtArgs>>): Prisma__TasktypeClient<$Result.GetResult<Prisma.$TasktypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    codelang<T extends CodelangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodelangDefaultArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskcategory<T extends TaskcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskcategoryDefaultArgs<ExtArgs>>): Prisma__TaskcategoryClient<$Result.GetResult<Prisma.$TaskcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Task", 'Int'>
    readonly tasktypeId: FieldRef<"Task", 'Int'>
    readonly codelangId: FieldRef<"Task", 'Int'>
    readonly workflowId: FieldRef<"Task", 'Int'>
    readonly taskcategoryId: FieldRef<"Task", 'Int'>
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
   * Model Apptype
   */

  export type AggregateApptype = {
    _count: ApptypeCountAggregateOutputType | null
    _avg: ApptypeAvgAggregateOutputType | null
    _sum: ApptypeSumAggregateOutputType | null
    _min: ApptypeMinAggregateOutputType | null
    _max: ApptypeMaxAggregateOutputType | null
  }

  export type ApptypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ApptypeSumAggregateOutputType = {
    id: number | null
  }

  export type ApptypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ApptypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ApptypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ApptypeAvgAggregateInputType = {
    id?: true
  }

  export type ApptypeSumAggregateInputType = {
    id?: true
  }

  export type ApptypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ApptypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ApptypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ApptypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apptype to aggregate.
     */
    where?: ApptypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apptypes to fetch.
     */
    orderBy?: ApptypeOrderByWithRelationInput | ApptypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApptypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apptypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apptypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apptypes
    **/
    _count?: true | ApptypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApptypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApptypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApptypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApptypeMaxAggregateInputType
  }

  export type GetApptypeAggregateType<T extends ApptypeAggregateArgs> = {
        [P in keyof T & keyof AggregateApptype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApptype[P]>
      : GetScalarType<T[P], AggregateApptype[P]>
  }




  export type ApptypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApptypeWhereInput
    orderBy?: ApptypeOrderByWithAggregationInput | ApptypeOrderByWithAggregationInput[]
    by: ApptypeScalarFieldEnum[] | ApptypeScalarFieldEnum
    having?: ApptypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApptypeCountAggregateInputType | true
    _avg?: ApptypeAvgAggregateInputType
    _sum?: ApptypeSumAggregateInputType
    _min?: ApptypeMinAggregateInputType
    _max?: ApptypeMaxAggregateInputType
  }

  export type ApptypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: ApptypeCountAggregateOutputType | null
    _avg: ApptypeAvgAggregateOutputType | null
    _sum: ApptypeSumAggregateOutputType | null
    _min: ApptypeMinAggregateOutputType | null
    _max: ApptypeMaxAggregateOutputType | null
  }

  type GetApptypeGroupByPayload<T extends ApptypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApptypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApptypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApptypeGroupByOutputType[P]>
            : GetScalarType<T[P], ApptypeGroupByOutputType[P]>
        }
      >
    >


  export type ApptypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    applications?: boolean | Apptype$applicationsArgs<ExtArgs>
    _count?: boolean | ApptypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apptype"]>

  export type ApptypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["apptype"]>

  export type ApptypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["apptype"]>

  export type ApptypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ApptypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["apptype"]>
  export type ApptypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Apptype$applicationsArgs<ExtArgs>
    _count?: boolean | ApptypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApptypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApptypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApptypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apptype"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["apptype"]>
    composites: {}
  }

  type ApptypeGetPayload<S extends boolean | null | undefined | ApptypeDefaultArgs> = $Result.GetResult<Prisma.$ApptypePayload, S>

  type ApptypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApptypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApptypeCountAggregateInputType | true
    }

  export interface ApptypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apptype'], meta: { name: 'Apptype' } }
    /**
     * Find zero or one Apptype that matches the filter.
     * @param {ApptypeFindUniqueArgs} args - Arguments to find a Apptype
     * @example
     * // Get one Apptype
     * const apptype = await prisma.apptype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApptypeFindUniqueArgs>(args: SelectSubset<T, ApptypeFindUniqueArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apptype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApptypeFindUniqueOrThrowArgs} args - Arguments to find a Apptype
     * @example
     * // Get one Apptype
     * const apptype = await prisma.apptype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApptypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ApptypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apptype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeFindFirstArgs} args - Arguments to find a Apptype
     * @example
     * // Get one Apptype
     * const apptype = await prisma.apptype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApptypeFindFirstArgs>(args?: SelectSubset<T, ApptypeFindFirstArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apptype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeFindFirstOrThrowArgs} args - Arguments to find a Apptype
     * @example
     * // Get one Apptype
     * const apptype = await prisma.apptype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApptypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ApptypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apptypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apptypes
     * const apptypes = await prisma.apptype.findMany()
     * 
     * // Get first 10 Apptypes
     * const apptypes = await prisma.apptype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apptypeWithIdOnly = await prisma.apptype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApptypeFindManyArgs>(args?: SelectSubset<T, ApptypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apptype.
     * @param {ApptypeCreateArgs} args - Arguments to create a Apptype.
     * @example
     * // Create one Apptype
     * const Apptype = await prisma.apptype.create({
     *   data: {
     *     // ... data to create a Apptype
     *   }
     * })
     * 
     */
    create<T extends ApptypeCreateArgs>(args: SelectSubset<T, ApptypeCreateArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apptypes.
     * @param {ApptypeCreateManyArgs} args - Arguments to create many Apptypes.
     * @example
     * // Create many Apptypes
     * const apptype = await prisma.apptype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApptypeCreateManyArgs>(args?: SelectSubset<T, ApptypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apptypes and returns the data saved in the database.
     * @param {ApptypeCreateManyAndReturnArgs} args - Arguments to create many Apptypes.
     * @example
     * // Create many Apptypes
     * const apptype = await prisma.apptype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apptypes and only return the `id`
     * const apptypeWithIdOnly = await prisma.apptype.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApptypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ApptypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apptype.
     * @param {ApptypeDeleteArgs} args - Arguments to delete one Apptype.
     * @example
     * // Delete one Apptype
     * const Apptype = await prisma.apptype.delete({
     *   where: {
     *     // ... filter to delete one Apptype
     *   }
     * })
     * 
     */
    delete<T extends ApptypeDeleteArgs>(args: SelectSubset<T, ApptypeDeleteArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apptype.
     * @param {ApptypeUpdateArgs} args - Arguments to update one Apptype.
     * @example
     * // Update one Apptype
     * const apptype = await prisma.apptype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApptypeUpdateArgs>(args: SelectSubset<T, ApptypeUpdateArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apptypes.
     * @param {ApptypeDeleteManyArgs} args - Arguments to filter Apptypes to delete.
     * @example
     * // Delete a few Apptypes
     * const { count } = await prisma.apptype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApptypeDeleteManyArgs>(args?: SelectSubset<T, ApptypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apptypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apptypes
     * const apptype = await prisma.apptype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApptypeUpdateManyArgs>(args: SelectSubset<T, ApptypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apptypes and returns the data updated in the database.
     * @param {ApptypeUpdateManyAndReturnArgs} args - Arguments to update many Apptypes.
     * @example
     * // Update many Apptypes
     * const apptype = await prisma.apptype.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apptypes and only return the `id`
     * const apptypeWithIdOnly = await prisma.apptype.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApptypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ApptypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apptype.
     * @param {ApptypeUpsertArgs} args - Arguments to update or create a Apptype.
     * @example
     * // Update or create a Apptype
     * const apptype = await prisma.apptype.upsert({
     *   create: {
     *     // ... data to create a Apptype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apptype we want to update
     *   }
     * })
     */
    upsert<T extends ApptypeUpsertArgs>(args: SelectSubset<T, ApptypeUpsertArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apptypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeCountArgs} args - Arguments to filter Apptypes to count.
     * @example
     * // Count the number of Apptypes
     * const count = await prisma.apptype.count({
     *   where: {
     *     // ... the filter for the Apptypes we want to count
     *   }
     * })
    **/
    count<T extends ApptypeCountArgs>(
      args?: Subset<T, ApptypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApptypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apptype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApptypeAggregateArgs>(args: Subset<T, ApptypeAggregateArgs>): Prisma.PrismaPromise<GetApptypeAggregateType<T>>

    /**
     * Group by Apptype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApptypeGroupByArgs} args - Group by arguments.
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
      T extends ApptypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApptypeGroupByArgs['orderBy'] }
        : { orderBy?: ApptypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApptypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApptypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apptype model
   */
  readonly fields: ApptypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apptype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApptypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Apptype$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Apptype$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Apptype model
   */
  interface ApptypeFieldRefs {
    readonly id: FieldRef<"Apptype", 'Int'>
    readonly name: FieldRef<"Apptype", 'String'>
    readonly description: FieldRef<"Apptype", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Apptype findUnique
   */
  export type ApptypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter, which Apptype to fetch.
     */
    where: ApptypeWhereUniqueInput
  }

  /**
   * Apptype findUniqueOrThrow
   */
  export type ApptypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter, which Apptype to fetch.
     */
    where: ApptypeWhereUniqueInput
  }

  /**
   * Apptype findFirst
   */
  export type ApptypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter, which Apptype to fetch.
     */
    where?: ApptypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apptypes to fetch.
     */
    orderBy?: ApptypeOrderByWithRelationInput | ApptypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apptypes.
     */
    cursor?: ApptypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apptypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apptypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apptypes.
     */
    distinct?: ApptypeScalarFieldEnum | ApptypeScalarFieldEnum[]
  }

  /**
   * Apptype findFirstOrThrow
   */
  export type ApptypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter, which Apptype to fetch.
     */
    where?: ApptypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apptypes to fetch.
     */
    orderBy?: ApptypeOrderByWithRelationInput | ApptypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apptypes.
     */
    cursor?: ApptypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apptypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apptypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apptypes.
     */
    distinct?: ApptypeScalarFieldEnum | ApptypeScalarFieldEnum[]
  }

  /**
   * Apptype findMany
   */
  export type ApptypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter, which Apptypes to fetch.
     */
    where?: ApptypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apptypes to fetch.
     */
    orderBy?: ApptypeOrderByWithRelationInput | ApptypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apptypes.
     */
    cursor?: ApptypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apptypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apptypes.
     */
    skip?: number
    distinct?: ApptypeScalarFieldEnum | ApptypeScalarFieldEnum[]
  }

  /**
   * Apptype create
   */
  export type ApptypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Apptype.
     */
    data: XOR<ApptypeCreateInput, ApptypeUncheckedCreateInput>
  }

  /**
   * Apptype createMany
   */
  export type ApptypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apptypes.
     */
    data: ApptypeCreateManyInput | ApptypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apptype createManyAndReturn
   */
  export type ApptypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * The data used to create many Apptypes.
     */
    data: ApptypeCreateManyInput | ApptypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apptype update
   */
  export type ApptypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Apptype.
     */
    data: XOR<ApptypeUpdateInput, ApptypeUncheckedUpdateInput>
    /**
     * Choose, which Apptype to update.
     */
    where: ApptypeWhereUniqueInput
  }

  /**
   * Apptype updateMany
   */
  export type ApptypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apptypes.
     */
    data: XOR<ApptypeUpdateManyMutationInput, ApptypeUncheckedUpdateManyInput>
    /**
     * Filter which Apptypes to update
     */
    where?: ApptypeWhereInput
    /**
     * Limit how many Apptypes to update.
     */
    limit?: number
  }

  /**
   * Apptype updateManyAndReturn
   */
  export type ApptypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * The data used to update Apptypes.
     */
    data: XOR<ApptypeUpdateManyMutationInput, ApptypeUncheckedUpdateManyInput>
    /**
     * Filter which Apptypes to update
     */
    where?: ApptypeWhereInput
    /**
     * Limit how many Apptypes to update.
     */
    limit?: number
  }

  /**
   * Apptype upsert
   */
  export type ApptypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Apptype to update in case it exists.
     */
    where: ApptypeWhereUniqueInput
    /**
     * In case the Apptype found by the `where` argument doesn't exist, create a new Apptype with this data.
     */
    create: XOR<ApptypeCreateInput, ApptypeUncheckedCreateInput>
    /**
     * In case the Apptype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApptypeUpdateInput, ApptypeUncheckedUpdateInput>
  }

  /**
   * Apptype delete
   */
  export type ApptypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
    /**
     * Filter which Apptype to delete.
     */
    where: ApptypeWhereUniqueInput
  }

  /**
   * Apptype deleteMany
   */
  export type ApptypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apptypes to delete
     */
    where?: ApptypeWhereInput
    /**
     * Limit how many Apptypes to delete.
     */
    limit?: number
  }

  /**
   * Apptype.applications
   */
  export type Apptype$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Apptype without action
   */
  export type ApptypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apptype
     */
    select?: ApptypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apptype
     */
    omit?: ApptypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApptypeInclude<ExtArgs> | null
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
    name: string | null
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
    name: string | null
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
    name: number
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
    name?: true
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
    name?: true
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
    name?: true
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
    name: string
    description: string | null
    repository: string | null
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
    name?: boolean
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
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    name?: boolean
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
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    name?: boolean
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
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    apptypeId?: boolean
    codelangId?: boolean
    name?: boolean
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

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apptypeId" | "codelangId" | "name" | "description" | "repository" | "author" | "osystem" | "appurl" | "apppath" | "localdev" | "usedocker" | "controlusers" | "useui" | "useagents" | "consumedb" | "consumeapi" | "consumeai" | "exposedb" | "exposeapi" | "updated", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apptype?: boolean | ApptypeDefaultArgs<ExtArgs>
    codelang?: boolean | CodelangDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      apptype: Prisma.$ApptypePayload<ExtArgs>
      codelang: Prisma.$CodelangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apptypeId: number
      codelangId: number
      name: string
      description: string | null
      repository: string | null
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
    apptype<T extends ApptypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApptypeDefaultArgs<ExtArgs>>): Prisma__ApptypeClient<$Result.GetResult<Prisma.$ApptypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    codelang<T extends CodelangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodelangDefaultArgs<ExtArgs>>): Prisma__CodelangClient<$Result.GetResult<Prisma.$CodelangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"Application", 'String'>
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


  export const CodelangScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CodelangScalarFieldEnum = (typeof CodelangScalarFieldEnum)[keyof typeof CodelangScalarFieldEnum]


  export const TasktypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TasktypeScalarFieldEnum = (typeof TasktypeScalarFieldEnum)[keyof typeof TasktypeScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    context: 'context',
    description: 'description',
    application: 'application',
    fpath: 'fpath',
    updated: 'updated'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const TaskcategoryScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    name: 'name',
    description: 'description'
  };

  export type TaskcategoryScalarFieldEnum = (typeof TaskcategoryScalarFieldEnum)[keyof typeof TaskcategoryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    tasktypeId: 'tasktypeId',
    codelangId: 'codelangId',
    workflowId: 'workflowId',
    taskcategoryId: 'taskcategoryId',
    orden: 'orden',
    name: 'name',
    tkgroup: 'tkgroup',
    description: 'description',
    files: 'files',
    folders: 'folders'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ApptypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ApptypeScalarFieldEnum = (typeof ApptypeScalarFieldEnum)[keyof typeof ApptypeScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    apptypeId: 'apptypeId',
    codelangId: 'codelangId',
    name: 'name',
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


  export type CodelangWhereInput = {
    AND?: CodelangWhereInput | CodelangWhereInput[]
    OR?: CodelangWhereInput[]
    NOT?: CodelangWhereInput | CodelangWhereInput[]
    id?: IntFilter<"Codelang"> | number
    name?: StringFilter<"Codelang"> | string
    description?: StringFilter<"Codelang"> | string
    tasks?: TaskListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type CodelangOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type CodelangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CodelangWhereInput | CodelangWhereInput[]
    OR?: CodelangWhereInput[]
    NOT?: CodelangWhereInput | CodelangWhereInput[]
    description?: StringFilter<"Codelang"> | string
    tasks?: TaskListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "name">

  export type CodelangOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CodelangCountOrderByAggregateInput
    _avg?: CodelangAvgOrderByAggregateInput
    _max?: CodelangMaxOrderByAggregateInput
    _min?: CodelangMinOrderByAggregateInput
    _sum?: CodelangSumOrderByAggregateInput
  }

  export type CodelangScalarWhereWithAggregatesInput = {
    AND?: CodelangScalarWhereWithAggregatesInput | CodelangScalarWhereWithAggregatesInput[]
    OR?: CodelangScalarWhereWithAggregatesInput[]
    NOT?: CodelangScalarWhereWithAggregatesInput | CodelangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Codelang"> | number
    name?: StringWithAggregatesFilter<"Codelang"> | string
    description?: StringWithAggregatesFilter<"Codelang"> | string
  }

  export type TasktypeWhereInput = {
    AND?: TasktypeWhereInput | TasktypeWhereInput[]
    OR?: TasktypeWhereInput[]
    NOT?: TasktypeWhereInput | TasktypeWhereInput[]
    id?: IntFilter<"Tasktype"> | number
    name?: StringFilter<"Tasktype"> | string
    description?: StringNullableFilter<"Tasktype"> | string | null
    tasks?: TaskListRelationFilter
  }

  export type TasktypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TasktypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TasktypeWhereInput | TasktypeWhereInput[]
    OR?: TasktypeWhereInput[]
    NOT?: TasktypeWhereInput | TasktypeWhereInput[]
    description?: StringNullableFilter<"Tasktype"> | string | null
    tasks?: TaskListRelationFilter
  }, "id" | "name">

  export type TasktypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TasktypeCountOrderByAggregateInput
    _avg?: TasktypeAvgOrderByAggregateInput
    _max?: TasktypeMaxOrderByAggregateInput
    _min?: TasktypeMinOrderByAggregateInput
    _sum?: TasktypeSumOrderByAggregateInput
  }

  export type TasktypeScalarWhereWithAggregatesInput = {
    AND?: TasktypeScalarWhereWithAggregatesInput | TasktypeScalarWhereWithAggregatesInput[]
    OR?: TasktypeScalarWhereWithAggregatesInput[]
    NOT?: TasktypeScalarWhereWithAggregatesInput | TasktypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tasktype"> | number
    name?: StringWithAggregatesFilter<"Tasktype"> | string
    description?: StringNullableWithAggregatesFilter<"Tasktype"> | string | null
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: IntFilter<"Workflow"> | number
    name?: StringFilter<"Workflow"> | string
    context?: StringNullableFilter<"Workflow"> | string | null
    description?: StringNullableFilter<"Workflow"> | string | null
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    tasks?: TaskListRelationFilter
    taskcategorys?: TaskcategoryListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    taskcategorys?: TaskcategoryOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    context?: StringNullableFilter<"Workflow"> | string | null
    description?: StringNullableFilter<"Workflow"> | string | null
    application?: StringNullableFilter<"Workflow"> | string | null
    fpath?: StringNullableFilter<"Workflow"> | string | null
    updated?: DateTimeFilter<"Workflow"> | Date | string
    tasks?: TaskListRelationFilter
    taskcategorys?: TaskcategoryListRelationFilter
  }, "id" | "name">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    application?: SortOrderInput | SortOrder
    fpath?: SortOrderInput | SortOrder
    updated?: SortOrder
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
    name?: StringWithAggregatesFilter<"Workflow"> | string
    context?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    application?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    fpath?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    updated?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type TaskcategoryWhereInput = {
    AND?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    OR?: TaskcategoryWhereInput[]
    NOT?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    id?: IntFilter<"Taskcategory"> | number
    workflowId?: IntFilter<"Taskcategory"> | number
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type TaskcategoryOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TaskcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    OR?: TaskcategoryWhereInput[]
    NOT?: TaskcategoryWhereInput | TaskcategoryWhereInput[]
    workflowId?: IntFilter<"Taskcategory"> | number
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type TaskcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TaskcategoryCountOrderByAggregateInput
    _avg?: TaskcategoryAvgOrderByAggregateInput
    _max?: TaskcategoryMaxOrderByAggregateInput
    _min?: TaskcategoryMinOrderByAggregateInput
    _sum?: TaskcategorySumOrderByAggregateInput
  }

  export type TaskcategoryScalarWhereWithAggregatesInput = {
    AND?: TaskcategoryScalarWhereWithAggregatesInput | TaskcategoryScalarWhereWithAggregatesInput[]
    OR?: TaskcategoryScalarWhereWithAggregatesInput[]
    NOT?: TaskcategoryScalarWhereWithAggregatesInput | TaskcategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taskcategory"> | number
    workflowId?: IntWithAggregatesFilter<"Taskcategory"> | number
    name?: StringWithAggregatesFilter<"Taskcategory"> | string
    description?: StringNullableWithAggregatesFilter<"Taskcategory"> | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    tasktypeId?: IntFilter<"Task"> | number
    codelangId?: IntFilter<"Task"> | number
    workflowId?: IntFilter<"Task"> | number
    taskcategoryId?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
    tasktype?: XOR<TasktypeScalarRelationFilter, TasktypeWhereInput>
    codelang?: XOR<CodelangScalarRelationFilter, CodelangWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    taskcategory?: XOR<TaskcategoryScalarRelationFilter, TaskcategoryWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    folders?: SortOrderInput | SortOrder
    tasktype?: TasktypeOrderByWithRelationInput
    codelang?: CodelangOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
    taskcategory?: TaskcategoryOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    tasktypeId?: IntFilter<"Task"> | number
    codelangId?: IntFilter<"Task"> | number
    workflowId?: IntFilter<"Task"> | number
    taskcategoryId?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
    tasktype?: XOR<TasktypeScalarRelationFilter, TasktypeWhereInput>
    codelang?: XOR<CodelangScalarRelationFilter, CodelangWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    taskcategory?: XOR<TaskcategoryScalarRelationFilter, TaskcategoryWhereInput>
  }, "id" | "name">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
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
    id?: IntWithAggregatesFilter<"Task"> | number
    tasktypeId?: IntWithAggregatesFilter<"Task"> | number
    codelangId?: IntWithAggregatesFilter<"Task"> | number
    workflowId?: IntWithAggregatesFilter<"Task"> | number
    taskcategoryId?: IntWithAggregatesFilter<"Task"> | number
    orden?: IntWithAggregatesFilter<"Task"> | number
    name?: StringWithAggregatesFilter<"Task"> | string
    tkgroup?: IntWithAggregatesFilter<"Task"> | number
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    files?: StringNullableWithAggregatesFilter<"Task"> | string | null
    folders?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type ApptypeWhereInput = {
    AND?: ApptypeWhereInput | ApptypeWhereInput[]
    OR?: ApptypeWhereInput[]
    NOT?: ApptypeWhereInput | ApptypeWhereInput[]
    id?: IntFilter<"Apptype"> | number
    name?: StringFilter<"Apptype"> | string
    description?: StringNullableFilter<"Apptype"> | string | null
    applications?: ApplicationListRelationFilter
  }

  export type ApptypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type ApptypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ApptypeWhereInput | ApptypeWhereInput[]
    OR?: ApptypeWhereInput[]
    NOT?: ApptypeWhereInput | ApptypeWhereInput[]
    description?: StringNullableFilter<"Apptype"> | string | null
    applications?: ApplicationListRelationFilter
  }, "id" | "name">

  export type ApptypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ApptypeCountOrderByAggregateInput
    _avg?: ApptypeAvgOrderByAggregateInput
    _max?: ApptypeMaxOrderByAggregateInput
    _min?: ApptypeMinOrderByAggregateInput
    _sum?: ApptypeSumOrderByAggregateInput
  }

  export type ApptypeScalarWhereWithAggregatesInput = {
    AND?: ApptypeScalarWhereWithAggregatesInput | ApptypeScalarWhereWithAggregatesInput[]
    OR?: ApptypeScalarWhereWithAggregatesInput[]
    NOT?: ApptypeScalarWhereWithAggregatesInput | ApptypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apptype"> | number
    name?: StringWithAggregatesFilter<"Apptype"> | string
    description?: StringNullableWithAggregatesFilter<"Apptype"> | string | null
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    apptypeId?: IntFilter<"Application"> | number
    codelangId?: IntFilter<"Application"> | number
    name?: StringFilter<"Application"> | string
    description?: StringNullableFilter<"Application"> | string | null
    repository?: StringNullableFilter<"Application"> | string | null
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
    apptype?: XOR<ApptypeScalarRelationFilter, ApptypeWhereInput>
    codelang?: XOR<CodelangScalarRelationFilter, CodelangWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    repository?: SortOrderInput | SortOrder
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
    apptype?: ApptypeOrderByWithRelationInput
    codelang?: CodelangOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    apptypeId?: IntFilter<"Application"> | number
    codelangId?: IntFilter<"Application"> | number
    description?: StringNullableFilter<"Application"> | string | null
    repository?: StringNullableFilter<"Application"> | string | null
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
    apptype?: XOR<ApptypeScalarRelationFilter, ApptypeWhereInput>
    codelang?: XOR<CodelangScalarRelationFilter, CodelangWhereInput>
  }, "id" | "name">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    repository?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"Application"> | string
    description?: StringNullableWithAggregatesFilter<"Application"> | string | null
    repository?: StringNullableWithAggregatesFilter<"Application"> | string | null
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

  export type CodelangCreateInput = {
    name: string
    description: string
    tasks?: TaskCreateNestedManyWithoutCodelangInput
    applications?: ApplicationCreateNestedManyWithoutCodelangInput
  }

  export type CodelangUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCodelangInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodelangUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutCodelangNestedInput
    applications?: ApplicationUpdateManyWithoutCodelangNestedInput
  }

  export type CodelangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCodelangNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCodelangNestedInput
  }

  export type CodelangCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CodelangUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CodelangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TasktypeCreateInput = {
    name: string
    description?: string | null
    tasks?: TaskCreateNestedManyWithoutTasktypeInput
  }

  export type TasktypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTasktypeInput
  }

  export type TasktypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutTasktypeNestedInput
  }

  export type TasktypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTasktypeNestedInput
  }

  export type TasktypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type TasktypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasktypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowCreateInput = {
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    tasks?: TaskCreateNestedManyWithoutWorkflowInput
    taskcategorys?: TaskcategoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: number
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkflowInput
    taskcategorys?: TaskcategoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutWorkflowNestedInput
    taskcategorys?: TaskcategoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkflowNestedInput
    taskcategorys?: TaskcategoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: number
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskcategoryCreateInput = {
    name: string
    description?: string | null
    workflow: WorkflowCreateNestedOneWithoutTaskcategorysInput
    tasks?: TaskCreateNestedManyWithoutTaskcategoryInput
  }

  export type TaskcategoryUncheckedCreateInput = {
    id?: number
    workflowId: number
    name: string
    description?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTaskcategoryInput
  }

  export type TaskcategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskcategorysNestedInput
    tasks?: TaskUpdateManyWithoutTaskcategoryNestedInput
  }

  export type TaskcategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTaskcategoryNestedInput
  }

  export type TaskcategoryCreateManyInput = {
    id?: number
    workflowId: number
    name: string
    description?: string | null
  }

  export type TaskcategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateInput = {
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    tasktype: TasktypeCreateNestedOneWithoutTasksInput
    codelang: CodelangCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
    taskcategory: TaskcategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    tasktype?: TasktypeUpdateOneRequiredWithoutTasksNestedInput
    codelang?: CodelangUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
    taskcategory?: TaskcategoryUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApptypeCreateInput = {
    name: string
    description?: string | null
    applications?: ApplicationCreateNestedManyWithoutApptypeInput
  }

  export type ApptypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutApptypeInput
  }

  export type ApptypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: ApplicationUpdateManyWithoutApptypeNestedInput
  }

  export type ApptypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutApptypeNestedInput
  }

  export type ApptypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type ApptypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApptypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateInput = {
    name: string
    description?: string | null
    repository?: string | null
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
    apptype: ApptypeCreateNestedOneWithoutApplicationsInput
    codelang: CodelangCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    apptypeId: number
    codelangId: number
    name: string
    description?: string | null
    repository?: string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    apptype?: ApptypeUpdateOneRequiredWithoutApplicationsNestedInput
    codelang?: CodelangUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    name: string
    description?: string | null
    repository?: string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodelangCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CodelangAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodelangMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CodelangMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CodelangSumOrderByAggregateInput = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TasktypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TasktypeAvgOrderByAggregateInput = {
    id?: SortOrder
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

  export type TasktypeSumOrderByAggregateInput = {
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
    context?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrder
    description?: SortOrder
    application?: SortOrder
    fpath?: SortOrder
    updated?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type TaskcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TaskcategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
  }

  export type TaskcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TaskcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TaskcategorySumOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
  }

  export type TasktypeScalarRelationFilter = {
    is?: TasktypeWhereInput
    isNot?: TasktypeWhereInput
  }

  export type CodelangScalarRelationFilter = {
    is?: CodelangWhereInput
    isNot?: CodelangWhereInput
  }

  export type TaskcategoryScalarRelationFilter = {
    is?: TaskcategoryWhereInput
    isNot?: TaskcategoryWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    tkgroup?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    name?: SortOrder
    tkgroup?: SortOrder
    description?: SortOrder
    files?: SortOrder
    folders?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    tasktypeId?: SortOrder
    codelangId?: SortOrder
    workflowId?: SortOrder
    taskcategoryId?: SortOrder
    orden?: SortOrder
    tkgroup?: SortOrder
  }

  export type ApptypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ApptypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApptypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ApptypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ApptypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApptypeScalarRelationFilter = {
    is?: ApptypeWhereInput
    isNot?: ApptypeWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    apptypeId?: SortOrder
    codelangId?: SortOrder
    name?: SortOrder
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
    name?: SortOrder
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
    name?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutCodelangInput = {
    create?: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput> | TaskCreateWithoutCodelangInput[] | TaskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCodelangInput | TaskCreateOrConnectWithoutCodelangInput[]
    createMany?: TaskCreateManyCodelangInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCodelangInput = {
    create?: XOR<ApplicationCreateWithoutCodelangInput, ApplicationUncheckedCreateWithoutCodelangInput> | ApplicationCreateWithoutCodelangInput[] | ApplicationUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCodelangInput | ApplicationCreateOrConnectWithoutCodelangInput[]
    createMany?: ApplicationCreateManyCodelangInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCodelangInput = {
    create?: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput> | TaskCreateWithoutCodelangInput[] | TaskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCodelangInput | TaskCreateOrConnectWithoutCodelangInput[]
    createMany?: TaskCreateManyCodelangInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
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

  export type TaskUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput> | TaskCreateWithoutCodelangInput[] | TaskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCodelangInput | TaskCreateOrConnectWithoutCodelangInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCodelangInput | TaskUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: TaskCreateManyCodelangInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCodelangInput | TaskUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCodelangInput | TaskUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
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

  export type TaskUncheckedUpdateManyWithoutCodelangNestedInput = {
    create?: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput> | TaskCreateWithoutCodelangInput[] | TaskUncheckedCreateWithoutCodelangInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCodelangInput | TaskCreateOrConnectWithoutCodelangInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCodelangInput | TaskUpsertWithWhereUniqueWithoutCodelangInput[]
    createMany?: TaskCreateManyCodelangInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCodelangInput | TaskUpdateWithWhereUniqueWithoutCodelangInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCodelangInput | TaskUpdateManyWithWhereWithoutCodelangInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type WorkflowCreateNestedOneWithoutTaskcategorysInput = {
    create?: XOR<WorkflowCreateWithoutTaskcategorysInput, WorkflowUncheckedCreateWithoutTaskcategorysInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskcategorysInput
    connect?: WorkflowWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutTaskcategoryInput = {
    create?: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput> | TaskCreateWithoutTaskcategoryInput[] | TaskUncheckedCreateWithoutTaskcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskcategoryInput | TaskCreateOrConnectWithoutTaskcategoryInput[]
    createMany?: TaskCreateManyTaskcategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTaskcategoryInput = {
    create?: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput> | TaskCreateWithoutTaskcategoryInput[] | TaskUncheckedCreateWithoutTaskcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskcategoryInput | TaskCreateOrConnectWithoutTaskcategoryInput[]
    createMany?: TaskCreateManyTaskcategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkflowUpdateOneRequiredWithoutTaskcategorysNestedInput = {
    create?: XOR<WorkflowCreateWithoutTaskcategorysInput, WorkflowUncheckedCreateWithoutTaskcategorysInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskcategorysInput
    upsert?: WorkflowUpsertWithoutTaskcategorysInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTaskcategorysInput, WorkflowUpdateWithoutTaskcategorysInput>, WorkflowUncheckedUpdateWithoutTaskcategorysInput>
  }

  export type TaskUpdateManyWithoutTaskcategoryNestedInput = {
    create?: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput> | TaskCreateWithoutTaskcategoryInput[] | TaskUncheckedCreateWithoutTaskcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskcategoryInput | TaskCreateOrConnectWithoutTaskcategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskcategoryInput | TaskUpsertWithWhereUniqueWithoutTaskcategoryInput[]
    createMany?: TaskCreateManyTaskcategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskcategoryInput | TaskUpdateWithWhereUniqueWithoutTaskcategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskcategoryInput | TaskUpdateManyWithWhereWithoutTaskcategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTaskcategoryNestedInput = {
    create?: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput> | TaskCreateWithoutTaskcategoryInput[] | TaskUncheckedCreateWithoutTaskcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskcategoryInput | TaskCreateOrConnectWithoutTaskcategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskcategoryInput | TaskUpsertWithWhereUniqueWithoutTaskcategoryInput[]
    createMany?: TaskCreateManyTaskcategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskcategoryInput | TaskUpdateWithWhereUniqueWithoutTaskcategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskcategoryInput | TaskUpdateManyWithWhereWithoutTaskcategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TasktypeCreateNestedOneWithoutTasksInput = {
    create?: XOR<TasktypeCreateWithoutTasksInput, TasktypeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TasktypeCreateOrConnectWithoutTasksInput
    connect?: TasktypeWhereUniqueInput
  }

  export type CodelangCreateNestedOneWithoutTasksInput = {
    create?: XOR<CodelangCreateWithoutTasksInput, CodelangUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CodelangCreateOrConnectWithoutTasksInput
    connect?: CodelangWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTasksInput
    connect?: WorkflowWhereUniqueInput
  }

  export type TaskcategoryCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskcategoryCreateWithoutTasksInput, TaskcategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutTasksInput
    connect?: TaskcategoryWhereUniqueInput
  }

  export type TasktypeUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TasktypeCreateWithoutTasksInput, TasktypeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TasktypeCreateOrConnectWithoutTasksInput
    upsert?: TasktypeUpsertWithoutTasksInput
    connect?: TasktypeWhereUniqueInput
    update?: XOR<XOR<TasktypeUpdateToOneWithWhereWithoutTasksInput, TasktypeUpdateWithoutTasksInput>, TasktypeUncheckedUpdateWithoutTasksInput>
  }

  export type CodelangUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CodelangCreateWithoutTasksInput, CodelangUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CodelangCreateOrConnectWithoutTasksInput
    upsert?: CodelangUpsertWithoutTasksInput
    connect?: CodelangWhereUniqueInput
    update?: XOR<XOR<CodelangUpdateToOneWithWhereWithoutTasksInput, CodelangUpdateWithoutTasksInput>, CodelangUncheckedUpdateWithoutTasksInput>
  }

  export type WorkflowUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTasksInput
    upsert?: WorkflowUpsertWithoutTasksInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTasksInput, WorkflowUpdateWithoutTasksInput>, WorkflowUncheckedUpdateWithoutTasksInput>
  }

  export type TaskcategoryUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TaskcategoryCreateWithoutTasksInput, TaskcategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskcategoryCreateOrConnectWithoutTasksInput
    upsert?: TaskcategoryUpsertWithoutTasksInput
    connect?: TaskcategoryWhereUniqueInput
    update?: XOR<XOR<TaskcategoryUpdateToOneWithWhereWithoutTasksInput, TaskcategoryUpdateWithoutTasksInput>, TaskcategoryUncheckedUpdateWithoutTasksInput>
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

  export type ApptypeCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ApptypeCreateWithoutApplicationsInput, ApptypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApptypeCreateOrConnectWithoutApplicationsInput
    connect?: ApptypeWhereUniqueInput
  }

  export type CodelangCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CodelangCreateWithoutApplicationsInput, CodelangUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CodelangCreateOrConnectWithoutApplicationsInput
    connect?: CodelangWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ApptypeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ApptypeCreateWithoutApplicationsInput, ApptypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApptypeCreateOrConnectWithoutApplicationsInput
    upsert?: ApptypeUpsertWithoutApplicationsInput
    connect?: ApptypeWhereUniqueInput
    update?: XOR<XOR<ApptypeUpdateToOneWithWhereWithoutApplicationsInput, ApptypeUpdateWithoutApplicationsInput>, ApptypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type CodelangUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CodelangCreateWithoutApplicationsInput, CodelangUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CodelangCreateOrConnectWithoutApplicationsInput
    upsert?: CodelangUpsertWithoutApplicationsInput
    connect?: CodelangWhereUniqueInput
    update?: XOR<XOR<CodelangUpdateToOneWithWhereWithoutApplicationsInput, CodelangUpdateWithoutApplicationsInput>, CodelangUncheckedUpdateWithoutApplicationsInput>
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

  export type TaskCreateWithoutCodelangInput = {
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    tasktype: TasktypeCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
    taskcategory: TaskcategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCodelangInput = {
    id?: number
    tasktypeId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskCreateOrConnectWithoutCodelangInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput>
  }

  export type TaskCreateManyCodelangInputEnvelope = {
    data: TaskCreateManyCodelangInput | TaskCreateManyCodelangInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCodelangInput = {
    name: string
    description?: string | null
    repository?: string | null
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
    apptype: ApptypeCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCodelangInput = {
    id?: number
    apptypeId: number
    name: string
    description?: string | null
    repository?: string | null
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

  export type TaskUpsertWithWhereUniqueWithoutCodelangInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCodelangInput, TaskUncheckedUpdateWithoutCodelangInput>
    create: XOR<TaskCreateWithoutCodelangInput, TaskUncheckedCreateWithoutCodelangInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCodelangInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCodelangInput, TaskUncheckedUpdateWithoutCodelangInput>
  }

  export type TaskUpdateManyWithWhereWithoutCodelangInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCodelangInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    tasktypeId?: IntFilter<"Task"> | number
    codelangId?: IntFilter<"Task"> | number
    workflowId?: IntFilter<"Task"> | number
    taskcategoryId?: IntFilter<"Task"> | number
    orden?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    tkgroup?: IntFilter<"Task"> | number
    description?: StringNullableFilter<"Task"> | string | null
    files?: StringNullableFilter<"Task"> | string | null
    folders?: StringNullableFilter<"Task"> | string | null
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
    name?: StringFilter<"Application"> | string
    description?: StringNullableFilter<"Application"> | string | null
    repository?: StringNullableFilter<"Application"> | string | null
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

  export type TaskCreateWithoutTasktypeInput = {
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    codelang: CodelangCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
    taskcategory: TaskcategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTasktypeInput = {
    id?: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
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
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    tasktype: TasktypeCreateNestedOneWithoutTasksInput
    codelang: CodelangCreateNestedOneWithoutTasksInput
    taskcategory: TaskcategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutWorkflowInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    taskcategoryId: number
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
    name: string
    description?: string | null
    tasks?: TaskCreateNestedManyWithoutTaskcategoryInput
  }

  export type TaskcategoryUncheckedCreateWithoutWorkflowInput = {
    id?: number
    name: string
    description?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTaskcategoryInput
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
    id?: IntFilter<"Taskcategory"> | number
    workflowId?: IntFilter<"Taskcategory"> | number
    name?: StringFilter<"Taskcategory"> | string
    description?: StringNullableFilter<"Taskcategory"> | string | null
  }

  export type WorkflowCreateWithoutTaskcategorysInput = {
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    tasks?: TaskCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTaskcategorysInput = {
    id?: number
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTaskcategorysInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTaskcategorysInput, WorkflowUncheckedCreateWithoutTaskcategorysInput>
  }

  export type TaskCreateWithoutTaskcategoryInput = {
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
    tasktype: TasktypeCreateNestedOneWithoutTasksInput
    codelang: CodelangCreateNestedOneWithoutTasksInput
    workflow: WorkflowCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskcategoryInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskCreateOrConnectWithoutTaskcategoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput>
  }

  export type TaskCreateManyTaskcategoryInputEnvelope = {
    data: TaskCreateManyTaskcategoryInput | TaskCreateManyTaskcategoryInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutTaskcategorysInput = {
    update: XOR<WorkflowUpdateWithoutTaskcategorysInput, WorkflowUncheckedUpdateWithoutTaskcategorysInput>
    create: XOR<WorkflowCreateWithoutTaskcategorysInput, WorkflowUncheckedCreateWithoutTaskcategorysInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTaskcategorysInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTaskcategorysInput, WorkflowUncheckedUpdateWithoutTaskcategorysInput>
  }

  export type WorkflowUpdateWithoutTaskcategorysInput = {
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTaskcategorysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutTaskcategoryInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTaskcategoryInput, TaskUncheckedUpdateWithoutTaskcategoryInput>
    create: XOR<TaskCreateWithoutTaskcategoryInput, TaskUncheckedCreateWithoutTaskcategoryInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTaskcategoryInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTaskcategoryInput, TaskUncheckedUpdateWithoutTaskcategoryInput>
  }

  export type TaskUpdateManyWithWhereWithoutTaskcategoryInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTaskcategoryInput>
  }

  export type TasktypeCreateWithoutTasksInput = {
    name: string
    description?: string | null
  }

  export type TasktypeUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type TasktypeCreateOrConnectWithoutTasksInput = {
    where: TasktypeWhereUniqueInput
    create: XOR<TasktypeCreateWithoutTasksInput, TasktypeUncheckedCreateWithoutTasksInput>
  }

  export type CodelangCreateWithoutTasksInput = {
    name: string
    description: string
    applications?: ApplicationCreateNestedManyWithoutCodelangInput
  }

  export type CodelangUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodelangCreateOrConnectWithoutTasksInput = {
    where: CodelangWhereUniqueInput
    create: XOR<CodelangCreateWithoutTasksInput, CodelangUncheckedCreateWithoutTasksInput>
  }

  export type WorkflowCreateWithoutTasksInput = {
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    taskcategorys?: TaskcategoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    context?: string | null
    description?: string | null
    application?: string | null
    fpath?: string | null
    updated: Date | string
    taskcategorys?: TaskcategoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTasksInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTasksInput, WorkflowUncheckedCreateWithoutTasksInput>
  }

  export type TaskcategoryCreateWithoutTasksInput = {
    name: string
    description?: string | null
    workflow: WorkflowCreateNestedOneWithoutTaskcategorysInput
  }

  export type TaskcategoryUncheckedCreateWithoutTasksInput = {
    id?: number
    workflowId: number
    name: string
    description?: string | null
  }

  export type TaskcategoryCreateOrConnectWithoutTasksInput = {
    where: TaskcategoryWhereUniqueInput
    create: XOR<TaskcategoryCreateWithoutTasksInput, TaskcategoryUncheckedCreateWithoutTasksInput>
  }

  export type TasktypeUpsertWithoutTasksInput = {
    update: XOR<TasktypeUpdateWithoutTasksInput, TasktypeUncheckedUpdateWithoutTasksInput>
    create: XOR<TasktypeCreateWithoutTasksInput, TasktypeUncheckedCreateWithoutTasksInput>
    where?: TasktypeWhereInput
  }

  export type TasktypeUpdateToOneWithWhereWithoutTasksInput = {
    where?: TasktypeWhereInput
    data: XOR<TasktypeUpdateWithoutTasksInput, TasktypeUncheckedUpdateWithoutTasksInput>
  }

  export type TasktypeUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasktypeUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CodelangUpsertWithoutTasksInput = {
    update: XOR<CodelangUpdateWithoutTasksInput, CodelangUncheckedUpdateWithoutTasksInput>
    create: XOR<CodelangCreateWithoutTasksInput, CodelangUncheckedCreateWithoutTasksInput>
    where?: CodelangWhereInput
  }

  export type CodelangUpdateToOneWithWhereWithoutTasksInput = {
    where?: CodelangWhereInput
    data: XOR<CodelangUpdateWithoutTasksInput, CodelangUncheckedUpdateWithoutTasksInput>
  }

  export type CodelangUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUpdateManyWithoutCodelangNestedInput
  }

  export type CodelangUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    taskcategorys?: TaskcategoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    application?: NullableStringFieldUpdateOperationsInput | string | null
    fpath?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    taskcategorys?: TaskcategoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type TaskcategoryUpsertWithoutTasksInput = {
    update: XOR<TaskcategoryUpdateWithoutTasksInput, TaskcategoryUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskcategoryCreateWithoutTasksInput, TaskcategoryUncheckedCreateWithoutTasksInput>
    where?: TaskcategoryWhereInput
  }

  export type TaskcategoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskcategoryWhereInput
    data: XOR<TaskcategoryUpdateWithoutTasksInput, TaskcategoryUncheckedUpdateWithoutTasksInput>
  }

  export type TaskcategoryUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskcategorysNestedInput
  }

  export type TaskcategoryUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateWithoutApptypeInput = {
    name: string
    description?: string | null
    repository?: string | null
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
    codelang: CodelangCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApptypeInput = {
    id?: number
    codelangId: number
    name: string
    description?: string | null
    repository?: string | null
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

  export type ApptypeCreateWithoutApplicationsInput = {
    name: string
    description?: string | null
  }

  export type ApptypeUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type ApptypeCreateOrConnectWithoutApplicationsInput = {
    where: ApptypeWhereUniqueInput
    create: XOR<ApptypeCreateWithoutApplicationsInput, ApptypeUncheckedCreateWithoutApplicationsInput>
  }

  export type CodelangCreateWithoutApplicationsInput = {
    name: string
    description: string
    tasks?: TaskCreateNestedManyWithoutCodelangInput
  }

  export type CodelangUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    description: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCodelangInput
  }

  export type CodelangCreateOrConnectWithoutApplicationsInput = {
    where: CodelangWhereUniqueInput
    create: XOR<CodelangCreateWithoutApplicationsInput, CodelangUncheckedCreateWithoutApplicationsInput>
  }

  export type ApptypeUpsertWithoutApplicationsInput = {
    update: XOR<ApptypeUpdateWithoutApplicationsInput, ApptypeUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ApptypeCreateWithoutApplicationsInput, ApptypeUncheckedCreateWithoutApplicationsInput>
    where?: ApptypeWhereInput
  }

  export type ApptypeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ApptypeWhereInput
    data: XOR<ApptypeUpdateWithoutApplicationsInput, ApptypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApptypeUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApptypeUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CodelangUpsertWithoutApplicationsInput = {
    update: XOR<CodelangUpdateWithoutApplicationsInput, CodelangUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CodelangCreateWithoutApplicationsInput, CodelangUncheckedCreateWithoutApplicationsInput>
    where?: CodelangWhereInput
  }

  export type CodelangUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CodelangWhereInput
    data: XOR<CodelangUpdateWithoutApplicationsInput, CodelangUncheckedUpdateWithoutApplicationsInput>
  }

  export type CodelangUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutCodelangNestedInput
  }

  export type CodelangUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCodelangNestedInput
  }

  export type TaskCreateManyCodelangInput = {
    id?: number
    tasktypeId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type ApplicationCreateManyCodelangInput = {
    id?: number
    apptypeId: number
    name: string
    description?: string | null
    repository?: string | null
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

  export type TaskUpdateWithoutCodelangInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    tasktype?: TasktypeUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
    taskcategory?: TaskcategoryUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUpdateWithoutCodelangInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    apptype?: ApptypeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCodelangInput = {
    id?: IntFieldUpdateOperationsInput | number
    apptypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type TaskCreateManyTasktypeInput = {
    id?: number
    codelangId: number
    workflowId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateWithoutTasktypeInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    codelang?: CodelangUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
    taskcategory?: TaskcategoryUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTasktypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutTasktypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyWorkflowInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    taskcategoryId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskcategoryCreateManyWorkflowInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type TaskUpdateWithoutWorkflowInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    tasktype?: TasktypeUpdateOneRequiredWithoutTasksNestedInput
    codelang?: CodelangUpdateOneRequiredWithoutTasksNestedInput
    taskcategory?: TaskcategoryUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    taskcategoryId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskcategoryUpdateWithoutWorkflowInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutTaskcategoryNestedInput
  }

  export type TaskcategoryUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTaskcategoryNestedInput
  }

  export type TaskcategoryUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyTaskcategoryInput = {
    id?: number
    tasktypeId: number
    codelangId: number
    workflowId: number
    orden: number
    name: string
    tkgroup: number
    description?: string | null
    files?: string | null
    folders?: string | null
  }

  export type TaskUpdateWithoutTaskcategoryInput = {
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
    tasktype?: TasktypeUpdateOneRequiredWithoutTasksNestedInput
    codelang?: CodelangUpdateOneRequiredWithoutTasksNestedInput
    workflow?: WorkflowUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutTaskcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tasktypeId?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    workflowId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tkgroup?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    files?: NullableStringFieldUpdateOperationsInput | string | null
    folders?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateManyApptypeInput = {
    id?: number
    codelangId: number
    name: string
    description?: string | null
    repository?: string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    codelang?: CodelangUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApptypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codelangId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repository?: NullableStringFieldUpdateOperationsInput | string | null
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