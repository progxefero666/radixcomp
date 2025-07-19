
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
 * Model proglanguage
 * 
 */
export type proglanguage = $Result.DefaultSelection<Prisma.$proglanguagePayload>
/**
 * Model template
 * 
 */
export type template = $Result.DefaultSelection<Prisma.$templatePayload>

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
   * `prisma.proglanguage`: Exposes CRUD operations for the **proglanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proglanguages
    * const proglanguages = await prisma.proglanguage.findMany()
    * ```
    */
  get proglanguage(): Prisma.proglanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.templateDelegate<ExtArgs, ClientOptions>;
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
    proglanguage: 'proglanguage',
    template: 'template'
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
      modelProps: "proglanguage" | "template"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      proglanguage: {
        payload: Prisma.$proglanguagePayload<ExtArgs>
        fields: Prisma.proglanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proglanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proglanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          findFirst: {
            args: Prisma.proglanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proglanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          findMany: {
            args: Prisma.proglanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>[]
          }
          create: {
            args: Prisma.proglanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          createMany: {
            args: Prisma.proglanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proglanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>[]
          }
          delete: {
            args: Prisma.proglanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          update: {
            args: Prisma.proglanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          deleteMany: {
            args: Prisma.proglanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proglanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proglanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>[]
          }
          upsert: {
            args: Prisma.proglanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proglanguagePayload>
          }
          aggregate: {
            args: Prisma.ProglanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProglanguage>
          }
          groupBy: {
            args: Prisma.proglanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProglanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.proglanguageCountArgs<ExtArgs>
            result: $Utils.Optional<ProglanguageCountAggregateOutputType> | number
          }
        }
      }
      template: {
        payload: Prisma.$templatePayload<ExtArgs>
        fields: Prisma.templateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.templateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.templateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          findFirst: {
            args: Prisma.templateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.templateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          findMany: {
            args: Prisma.templateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          create: {
            args: Prisma.templateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          createMany: {
            args: Prisma.templateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.templateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          delete: {
            args: Prisma.templateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          update: {
            args: Prisma.templateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          deleteMany: {
            args: Prisma.templateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.templateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.templateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          upsert: {
            args: Prisma.templateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.templateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.templateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
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
    proglanguage?: proglanguageOmit
    template?: templateOmit
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
    templates: number
  }

  export type ProglanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProglanguageCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model proglanguage
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
     * Filter which proglanguage to aggregate.
     */
    where?: proglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proglanguages to fetch.
     */
    orderBy?: proglanguageOrderByWithRelationInput | proglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proglanguages
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




  export type proglanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proglanguageWhereInput
    orderBy?: proglanguageOrderByWithAggregationInput | proglanguageOrderByWithAggregationInput[]
    by: ProglanguageScalarFieldEnum[] | ProglanguageScalarFieldEnum
    having?: proglanguageScalarWhereWithAggregatesInput
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

  type GetProglanguageGroupByPayload<T extends proglanguageGroupByArgs> = Prisma.PrismaPromise<
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


  export type proglanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    templates?: boolean | proglanguage$templatesArgs<ExtArgs>
    _count?: boolean | ProglanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proglanguage"]>

  export type proglanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["proglanguage"]>

  export type proglanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["proglanguage"]>

  export type proglanguageSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type proglanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["proglanguage"]>
  export type proglanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | proglanguage$templatesArgs<ExtArgs>
    _count?: boolean | ProglanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proglanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proglanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proglanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proglanguage"
    objects: {
      templates: Prisma.$templatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["proglanguage"]>
    composites: {}
  }

  type proglanguageGetPayload<S extends boolean | null | undefined | proglanguageDefaultArgs> = $Result.GetResult<Prisma.$proglanguagePayload, S>

  type proglanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proglanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProglanguageCountAggregateInputType | true
    }

  export interface proglanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proglanguage'], meta: { name: 'proglanguage' } }
    /**
     * Find zero or one Proglanguage that matches the filter.
     * @param {proglanguageFindUniqueArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proglanguageFindUniqueArgs>(args: SelectSubset<T, proglanguageFindUniqueArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proglanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proglanguageFindUniqueOrThrowArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proglanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, proglanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proglanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proglanguageFindFirstArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proglanguageFindFirstArgs>(args?: SelectSubset<T, proglanguageFindFirstArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proglanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proglanguageFindFirstOrThrowArgs} args - Arguments to find a Proglanguage
     * @example
     * // Get one Proglanguage
     * const proglanguage = await prisma.proglanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proglanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, proglanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proglanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proglanguageFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends proglanguageFindManyArgs>(args?: SelectSubset<T, proglanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proglanguage.
     * @param {proglanguageCreateArgs} args - Arguments to create a Proglanguage.
     * @example
     * // Create one Proglanguage
     * const Proglanguage = await prisma.proglanguage.create({
     *   data: {
     *     // ... data to create a Proglanguage
     *   }
     * })
     * 
     */
    create<T extends proglanguageCreateArgs>(args: SelectSubset<T, proglanguageCreateArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proglanguages.
     * @param {proglanguageCreateManyArgs} args - Arguments to create many Proglanguages.
     * @example
     * // Create many Proglanguages
     * const proglanguage = await prisma.proglanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proglanguageCreateManyArgs>(args?: SelectSubset<T, proglanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proglanguages and returns the data saved in the database.
     * @param {proglanguageCreateManyAndReturnArgs} args - Arguments to create many Proglanguages.
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
    createManyAndReturn<T extends proglanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, proglanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proglanguage.
     * @param {proglanguageDeleteArgs} args - Arguments to delete one Proglanguage.
     * @example
     * // Delete one Proglanguage
     * const Proglanguage = await prisma.proglanguage.delete({
     *   where: {
     *     // ... filter to delete one Proglanguage
     *   }
     * })
     * 
     */
    delete<T extends proglanguageDeleteArgs>(args: SelectSubset<T, proglanguageDeleteArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proglanguage.
     * @param {proglanguageUpdateArgs} args - Arguments to update one Proglanguage.
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
    update<T extends proglanguageUpdateArgs>(args: SelectSubset<T, proglanguageUpdateArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proglanguages.
     * @param {proglanguageDeleteManyArgs} args - Arguments to filter Proglanguages to delete.
     * @example
     * // Delete a few Proglanguages
     * const { count } = await prisma.proglanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proglanguageDeleteManyArgs>(args?: SelectSubset<T, proglanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proglanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proglanguageUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends proglanguageUpdateManyArgs>(args: SelectSubset<T, proglanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proglanguages and returns the data updated in the database.
     * @param {proglanguageUpdateManyAndReturnArgs} args - Arguments to update many Proglanguages.
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
    updateManyAndReturn<T extends proglanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, proglanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proglanguage.
     * @param {proglanguageUpsertArgs} args - Arguments to update or create a Proglanguage.
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
    upsert<T extends proglanguageUpsertArgs>(args: SelectSubset<T, proglanguageUpsertArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proglanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proglanguageCountArgs} args - Arguments to filter Proglanguages to count.
     * @example
     * // Count the number of Proglanguages
     * const count = await prisma.proglanguage.count({
     *   where: {
     *     // ... the filter for the Proglanguages we want to count
     *   }
     * })
    **/
    count<T extends proglanguageCountArgs>(
      args?: Subset<T, proglanguageCountArgs>,
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
     * @param {proglanguageGroupByArgs} args - Group by arguments.
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
      T extends proglanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proglanguageGroupByArgs['orderBy'] }
        : { orderBy?: proglanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proglanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProglanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proglanguage model
   */
  readonly fields: proglanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proglanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proglanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends proglanguage$templatesArgs<ExtArgs> = {}>(args?: Subset<T, proglanguage$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the proglanguage model
   */
  interface proglanguageFieldRefs {
    readonly id: FieldRef<"proglanguage", 'String'>
    readonly name: FieldRef<"proglanguage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proglanguage findUnique
   */
  export type proglanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter, which proglanguage to fetch.
     */
    where: proglanguageWhereUniqueInput
  }

  /**
   * proglanguage findUniqueOrThrow
   */
  export type proglanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter, which proglanguage to fetch.
     */
    where: proglanguageWhereUniqueInput
  }

  /**
   * proglanguage findFirst
   */
  export type proglanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter, which proglanguage to fetch.
     */
    where?: proglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proglanguages to fetch.
     */
    orderBy?: proglanguageOrderByWithRelationInput | proglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proglanguages.
     */
    cursor?: proglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proglanguages.
     */
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * proglanguage findFirstOrThrow
   */
  export type proglanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter, which proglanguage to fetch.
     */
    where?: proglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proglanguages to fetch.
     */
    orderBy?: proglanguageOrderByWithRelationInput | proglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proglanguages.
     */
    cursor?: proglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proglanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proglanguages.
     */
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * proglanguage findMany
   */
  export type proglanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter, which proglanguages to fetch.
     */
    where?: proglanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proglanguages to fetch.
     */
    orderBy?: proglanguageOrderByWithRelationInput | proglanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proglanguages.
     */
    cursor?: proglanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proglanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proglanguages.
     */
    skip?: number
    distinct?: ProglanguageScalarFieldEnum | ProglanguageScalarFieldEnum[]
  }

  /**
   * proglanguage create
   */
  export type proglanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a proglanguage.
     */
    data: XOR<proglanguageCreateInput, proglanguageUncheckedCreateInput>
  }

  /**
   * proglanguage createMany
   */
  export type proglanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proglanguages.
     */
    data: proglanguageCreateManyInput | proglanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proglanguage createManyAndReturn
   */
  export type proglanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * The data used to create many proglanguages.
     */
    data: proglanguageCreateManyInput | proglanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proglanguage update
   */
  export type proglanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a proglanguage.
     */
    data: XOR<proglanguageUpdateInput, proglanguageUncheckedUpdateInput>
    /**
     * Choose, which proglanguage to update.
     */
    where: proglanguageWhereUniqueInput
  }

  /**
   * proglanguage updateMany
   */
  export type proglanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proglanguages.
     */
    data: XOR<proglanguageUpdateManyMutationInput, proglanguageUncheckedUpdateManyInput>
    /**
     * Filter which proglanguages to update
     */
    where?: proglanguageWhereInput
    /**
     * Limit how many proglanguages to update.
     */
    limit?: number
  }

  /**
   * proglanguage updateManyAndReturn
   */
  export type proglanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * The data used to update proglanguages.
     */
    data: XOR<proglanguageUpdateManyMutationInput, proglanguageUncheckedUpdateManyInput>
    /**
     * Filter which proglanguages to update
     */
    where?: proglanguageWhereInput
    /**
     * Limit how many proglanguages to update.
     */
    limit?: number
  }

  /**
   * proglanguage upsert
   */
  export type proglanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the proglanguage to update in case it exists.
     */
    where: proglanguageWhereUniqueInput
    /**
     * In case the proglanguage found by the `where` argument doesn't exist, create a new proglanguage with this data.
     */
    create: XOR<proglanguageCreateInput, proglanguageUncheckedCreateInput>
    /**
     * In case the proglanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proglanguageUpdateInput, proglanguageUncheckedUpdateInput>
  }

  /**
   * proglanguage delete
   */
  export type proglanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
    /**
     * Filter which proglanguage to delete.
     */
    where: proglanguageWhereUniqueInput
  }

  /**
   * proglanguage deleteMany
   */
  export type proglanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proglanguages to delete
     */
    where?: proglanguageWhereInput
    /**
     * Limit how many proglanguages to delete.
     */
    limit?: number
  }

  /**
   * proglanguage.templates
   */
  export type proglanguage$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    where?: templateWhereInput
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    cursor?: templateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * proglanguage without action
   */
  export type proglanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proglanguage
     */
    select?: proglanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proglanguage
     */
    omit?: proglanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proglanguageInclude<ExtArgs> | null
  }


  /**
   * Model template
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
     * Filter which template to aggregate.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned templates
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




  export type templateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templateWhereInput
    orderBy?: templateOrderByWithAggregationInput | templateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: templateScalarWhereWithAggregatesInput
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

  type GetTemplateGroupByPayload<T extends templateGroupByArgs> = Prisma.PrismaPromise<
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


  export type templateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectScalar = {
    id?: boolean
    name?: boolean
    proglanguage_id?: boolean
    datacode?: boolean
  }

  export type templateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "proglanguage_id" | "datacode", ExtArgs["result"]["template"]>
  export type templateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }
  export type templateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }
  export type templateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proglanguage?: boolean | proglanguageDefaultArgs<ExtArgs>
  }

  export type $templatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "template"
    objects: {
      proglanguage: Prisma.$proglanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      proglanguage_id: string
      datacode: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type templateGetPayload<S extends boolean | null | undefined | templateDefaultArgs> = $Result.GetResult<Prisma.$templatePayload, S>

  type templateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<templateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface templateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['template'], meta: { name: 'template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {templateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends templateFindUniqueArgs>(args: SelectSubset<T, templateFindUniqueArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {templateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends templateFindUniqueOrThrowArgs>(args: SelectSubset<T, templateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends templateFindFirstArgs>(args?: SelectSubset<T, templateFindFirstArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends templateFindFirstOrThrowArgs>(args?: SelectSubset<T, templateFindFirstOrThrowArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends templateFindManyArgs>(args?: SelectSubset<T, templateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {templateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends templateCreateArgs>(args: SelectSubset<T, templateCreateArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {templateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends templateCreateManyArgs>(args?: SelectSubset<T, templateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {templateCreateManyAndReturnArgs} args - Arguments to create many Templates.
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
    createManyAndReturn<T extends templateCreateManyAndReturnArgs>(args?: SelectSubset<T, templateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {templateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends templateDeleteArgs>(args: SelectSubset<T, templateDeleteArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {templateUpdateArgs} args - Arguments to update one Template.
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
    update<T extends templateUpdateArgs>(args: SelectSubset<T, templateUpdateArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {templateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends templateDeleteManyArgs>(args?: SelectSubset<T, templateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends templateUpdateManyArgs>(args: SelectSubset<T, templateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {templateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
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
    updateManyAndReturn<T extends templateUpdateManyAndReturnArgs>(args: SelectSubset<T, templateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {templateUpsertArgs} args - Arguments to update or create a Template.
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
    upsert<T extends templateUpsertArgs>(args: SelectSubset<T, templateUpsertArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends templateCountArgs>(
      args?: Subset<T, templateCountArgs>,
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
     * @param {templateGroupByArgs} args - Group by arguments.
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
      T extends templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: templateGroupByArgs['orderBy'] }
        : { orderBy?: templateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the template model
   */
  readonly fields: templateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__templateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proglanguage<T extends proglanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proglanguageDefaultArgs<ExtArgs>>): Prisma__proglanguageClient<$Result.GetResult<Prisma.$proglanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the template model
   */
  interface templateFieldRefs {
    readonly id: FieldRef<"template", 'String'>
    readonly name: FieldRef<"template", 'String'>
    readonly proglanguage_id: FieldRef<"template", 'String'>
    readonly datacode: FieldRef<"template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * template findUnique
   */
  export type templateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template findUniqueOrThrow
   */
  export type templateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template findFirst
   */
  export type templateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template findFirstOrThrow
   */
  export type templateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template findMany
   */
  export type templateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template create
   */
  export type templateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The data needed to create a template.
     */
    data: XOR<templateCreateInput, templateUncheckedCreateInput>
  }

  /**
   * template createMany
   */
  export type templateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many templates.
     */
    data: templateCreateManyInput | templateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * template createManyAndReturn
   */
  export type templateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * The data used to create many templates.
     */
    data: templateCreateManyInput | templateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * template update
   */
  export type templateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The data needed to update a template.
     */
    data: XOR<templateUpdateInput, templateUncheckedUpdateInput>
    /**
     * Choose, which template to update.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template updateMany
   */
  export type templateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update templates.
     */
    data: XOR<templateUpdateManyMutationInput, templateUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
  }

  /**
   * template updateManyAndReturn
   */
  export type templateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * The data used to update templates.
     */
    data: XOR<templateUpdateManyMutationInput, templateUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * template upsert
   */
  export type templateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The filter to search for the template to update in case it exists.
     */
    where: templateWhereUniqueInput
    /**
     * In case the template found by the `where` argument doesn't exist, create a new template with this data.
     */
    create: XOR<templateCreateInput, templateUncheckedCreateInput>
    /**
     * In case the template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<templateUpdateInput, templateUncheckedUpdateInput>
  }

  /**
   * template delete
   */
  export type templateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter which template to delete.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template deleteMany
   */
  export type templateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to delete
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to delete.
     */
    limit?: number
  }

  /**
   * template without action
   */
  export type templateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
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
   * Deep Input Types
   */


  export type proglanguageWhereInput = {
    AND?: proglanguageWhereInput | proglanguageWhereInput[]
    OR?: proglanguageWhereInput[]
    NOT?: proglanguageWhereInput | proglanguageWhereInput[]
    id?: StringFilter<"proglanguage"> | string
    name?: StringFilter<"proglanguage"> | string
    templates?: TemplateListRelationFilter
  }

  export type proglanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    templates?: templateOrderByRelationAggregateInput
  }

  export type proglanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: proglanguageWhereInput | proglanguageWhereInput[]
    OR?: proglanguageWhereInput[]
    NOT?: proglanguageWhereInput | proglanguageWhereInput[]
    name?: StringFilter<"proglanguage"> | string
    templates?: TemplateListRelationFilter
  }, "id">

  export type proglanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: proglanguageCountOrderByAggregateInput
    _max?: proglanguageMaxOrderByAggregateInput
    _min?: proglanguageMinOrderByAggregateInput
  }

  export type proglanguageScalarWhereWithAggregatesInput = {
    AND?: proglanguageScalarWhereWithAggregatesInput | proglanguageScalarWhereWithAggregatesInput[]
    OR?: proglanguageScalarWhereWithAggregatesInput[]
    NOT?: proglanguageScalarWhereWithAggregatesInput | proglanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"proglanguage"> | string
    name?: StringWithAggregatesFilter<"proglanguage"> | string
  }

  export type templateWhereInput = {
    AND?: templateWhereInput | templateWhereInput[]
    OR?: templateWhereInput[]
    NOT?: templateWhereInput | templateWhereInput[]
    id?: StringFilter<"template"> | string
    name?: StringFilter<"template"> | string
    proglanguage_id?: StringFilter<"template"> | string
    datacode?: StringFilter<"template"> | string
    proglanguage?: XOR<ProglanguageScalarRelationFilter, proglanguageWhereInput>
  }

  export type templateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
    proglanguage?: proglanguageOrderByWithRelationInput
  }

  export type templateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: templateWhereInput | templateWhereInput[]
    OR?: templateWhereInput[]
    NOT?: templateWhereInput | templateWhereInput[]
    name?: StringFilter<"template"> | string
    proglanguage_id?: StringFilter<"template"> | string
    datacode?: StringFilter<"template"> | string
    proglanguage?: XOR<ProglanguageScalarRelationFilter, proglanguageWhereInput>
  }, "id">

  export type templateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
    _count?: templateCountOrderByAggregateInput
    _max?: templateMaxOrderByAggregateInput
    _min?: templateMinOrderByAggregateInput
  }

  export type templateScalarWhereWithAggregatesInput = {
    AND?: templateScalarWhereWithAggregatesInput | templateScalarWhereWithAggregatesInput[]
    OR?: templateScalarWhereWithAggregatesInput[]
    NOT?: templateScalarWhereWithAggregatesInput | templateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"template"> | string
    name?: StringWithAggregatesFilter<"template"> | string
    proglanguage_id?: StringWithAggregatesFilter<"template"> | string
    datacode?: StringWithAggregatesFilter<"template"> | string
  }

  export type proglanguageCreateInput = {
    id: string
    name: string
    templates?: templateCreateNestedManyWithoutProglanguageInput
  }

  export type proglanguageUncheckedCreateInput = {
    id: string
    name: string
    templates?: templateUncheckedCreateNestedManyWithoutProglanguageInput
  }

  export type proglanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    templates?: templateUpdateManyWithoutProglanguageNestedInput
  }

  export type proglanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    templates?: templateUncheckedUpdateManyWithoutProglanguageNestedInput
  }

  export type proglanguageCreateManyInput = {
    id: string
    name: string
  }

  export type proglanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type proglanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type templateCreateInput = {
    id: string
    name: string
    datacode: string
    proglanguage: proglanguageCreateNestedOneWithoutTemplatesInput
  }

  export type templateUncheckedCreateInput = {
    id: string
    name: string
    proglanguage_id: string
    datacode: string
  }

  export type templateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
    proglanguage?: proglanguageUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type templateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type templateCreateManyInput = {
    id: string
    name: string
    proglanguage_id: string
    datacode: string
  }

  export type templateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type templateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    proglanguage_id?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
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

  export type TemplateListRelationFilter = {
    every?: templateWhereInput
    some?: templateWhereInput
    none?: templateWhereInput
  }

  export type templateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type proglanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type proglanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type proglanguageMinOrderByAggregateInput = {
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
    is?: proglanguageWhereInput
    isNot?: proglanguageWhereInput
  }

  export type templateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
  }

  export type templateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
  }

  export type templateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    proglanguage_id?: SortOrder
    datacode?: SortOrder
  }

  export type templateCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput> | templateCreateWithoutProglanguageInput[] | templateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: templateCreateOrConnectWithoutProglanguageInput | templateCreateOrConnectWithoutProglanguageInput[]
    createMany?: templateCreateManyProglanguageInputEnvelope
    connect?: templateWhereUniqueInput | templateWhereUniqueInput[]
  }

  export type templateUncheckedCreateNestedManyWithoutProglanguageInput = {
    create?: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput> | templateCreateWithoutProglanguageInput[] | templateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: templateCreateOrConnectWithoutProglanguageInput | templateCreateOrConnectWithoutProglanguageInput[]
    createMany?: templateCreateManyProglanguageInputEnvelope
    connect?: templateWhereUniqueInput | templateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type templateUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput> | templateCreateWithoutProglanguageInput[] | templateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: templateCreateOrConnectWithoutProglanguageInput | templateCreateOrConnectWithoutProglanguageInput[]
    upsert?: templateUpsertWithWhereUniqueWithoutProglanguageInput | templateUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: templateCreateManyProglanguageInputEnvelope
    set?: templateWhereUniqueInput | templateWhereUniqueInput[]
    disconnect?: templateWhereUniqueInput | templateWhereUniqueInput[]
    delete?: templateWhereUniqueInput | templateWhereUniqueInput[]
    connect?: templateWhereUniqueInput | templateWhereUniqueInput[]
    update?: templateUpdateWithWhereUniqueWithoutProglanguageInput | templateUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: templateUpdateManyWithWhereWithoutProglanguageInput | templateUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: templateScalarWhereInput | templateScalarWhereInput[]
  }

  export type templateUncheckedUpdateManyWithoutProglanguageNestedInput = {
    create?: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput> | templateCreateWithoutProglanguageInput[] | templateUncheckedCreateWithoutProglanguageInput[]
    connectOrCreate?: templateCreateOrConnectWithoutProglanguageInput | templateCreateOrConnectWithoutProglanguageInput[]
    upsert?: templateUpsertWithWhereUniqueWithoutProglanguageInput | templateUpsertWithWhereUniqueWithoutProglanguageInput[]
    createMany?: templateCreateManyProglanguageInputEnvelope
    set?: templateWhereUniqueInput | templateWhereUniqueInput[]
    disconnect?: templateWhereUniqueInput | templateWhereUniqueInput[]
    delete?: templateWhereUniqueInput | templateWhereUniqueInput[]
    connect?: templateWhereUniqueInput | templateWhereUniqueInput[]
    update?: templateUpdateWithWhereUniqueWithoutProglanguageInput | templateUpdateWithWhereUniqueWithoutProglanguageInput[]
    updateMany?: templateUpdateManyWithWhereWithoutProglanguageInput | templateUpdateManyWithWhereWithoutProglanguageInput[]
    deleteMany?: templateScalarWhereInput | templateScalarWhereInput[]
  }

  export type proglanguageCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<proglanguageCreateWithoutTemplatesInput, proglanguageUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: proglanguageCreateOrConnectWithoutTemplatesInput
    connect?: proglanguageWhereUniqueInput
  }

  export type proglanguageUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<proglanguageCreateWithoutTemplatesInput, proglanguageUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: proglanguageCreateOrConnectWithoutTemplatesInput
    upsert?: proglanguageUpsertWithoutTemplatesInput
    connect?: proglanguageWhereUniqueInput
    update?: XOR<XOR<proglanguageUpdateToOneWithWhereWithoutTemplatesInput, proglanguageUpdateWithoutTemplatesInput>, proglanguageUncheckedUpdateWithoutTemplatesInput>
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

  export type templateCreateWithoutProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type templateUncheckedCreateWithoutProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type templateCreateOrConnectWithoutProglanguageInput = {
    where: templateWhereUniqueInput
    create: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput>
  }

  export type templateCreateManyProglanguageInputEnvelope = {
    data: templateCreateManyProglanguageInput | templateCreateManyProglanguageInput[]
    skipDuplicates?: boolean
  }

  export type templateUpsertWithWhereUniqueWithoutProglanguageInput = {
    where: templateWhereUniqueInput
    update: XOR<templateUpdateWithoutProglanguageInput, templateUncheckedUpdateWithoutProglanguageInput>
    create: XOR<templateCreateWithoutProglanguageInput, templateUncheckedCreateWithoutProglanguageInput>
  }

  export type templateUpdateWithWhereUniqueWithoutProglanguageInput = {
    where: templateWhereUniqueInput
    data: XOR<templateUpdateWithoutProglanguageInput, templateUncheckedUpdateWithoutProglanguageInput>
  }

  export type templateUpdateManyWithWhereWithoutProglanguageInput = {
    where: templateScalarWhereInput
    data: XOR<templateUpdateManyMutationInput, templateUncheckedUpdateManyWithoutProglanguageInput>
  }

  export type templateScalarWhereInput = {
    AND?: templateScalarWhereInput | templateScalarWhereInput[]
    OR?: templateScalarWhereInput[]
    NOT?: templateScalarWhereInput | templateScalarWhereInput[]
    id?: StringFilter<"template"> | string
    name?: StringFilter<"template"> | string
    proglanguage_id?: StringFilter<"template"> | string
    datacode?: StringFilter<"template"> | string
  }

  export type proglanguageCreateWithoutTemplatesInput = {
    id: string
    name: string
  }

  export type proglanguageUncheckedCreateWithoutTemplatesInput = {
    id: string
    name: string
  }

  export type proglanguageCreateOrConnectWithoutTemplatesInput = {
    where: proglanguageWhereUniqueInput
    create: XOR<proglanguageCreateWithoutTemplatesInput, proglanguageUncheckedCreateWithoutTemplatesInput>
  }

  export type proglanguageUpsertWithoutTemplatesInput = {
    update: XOR<proglanguageUpdateWithoutTemplatesInput, proglanguageUncheckedUpdateWithoutTemplatesInput>
    create: XOR<proglanguageCreateWithoutTemplatesInput, proglanguageUncheckedCreateWithoutTemplatesInput>
    where?: proglanguageWhereInput
  }

  export type proglanguageUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: proglanguageWhereInput
    data: XOR<proglanguageUpdateWithoutTemplatesInput, proglanguageUncheckedUpdateWithoutTemplatesInput>
  }

  export type proglanguageUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type proglanguageUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type templateCreateManyProglanguageInput = {
    id: string
    name: string
    datacode: string
  }

  export type templateUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type templateUncheckedUpdateWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
  }

  export type templateUncheckedUpdateManyWithoutProglanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    datacode?: StringFieldUpdateOperationsInput | string
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