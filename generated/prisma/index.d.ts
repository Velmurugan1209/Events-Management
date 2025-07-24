
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
 * Model IP
 * 
 */
export type IP = $Result.DefaultSelection<Prisma.$IPPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model Eventattendee
 * 
 */
export type Eventattendee = $Result.DefaultSelection<Prisma.$EventattendeePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IPS
 * const iPS = await prisma.iP.findMany()
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
   * // Fetch zero or more IPS
   * const iPS = await prisma.iP.findMany()
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
   * `prisma.iP`: Exposes CRUD operations for the **IP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IPS
    * const iPS = await prisma.iP.findMany()
    * ```
    */
  get iP(): Prisma.IPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventattendee`: Exposes CRUD operations for the **Eventattendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventattendees
    * const eventattendees = await prisma.eventattendee.findMany()
    * ```
    */
  get eventattendee(): Prisma.EventattendeeDelegate<ExtArgs, ClientOptions>;
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
    IP: 'IP',
    Event: 'Event',
    Attendee: 'Attendee',
    Venue: 'Venue',
    Eventattendee: 'Eventattendee'
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
      modelProps: "iP" | "event" | "attendee" | "venue" | "eventattendee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IP: {
        payload: Prisma.$IPPayload<ExtArgs>
        fields: Prisma.IPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          findFirst: {
            args: Prisma.IPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          findMany: {
            args: Prisma.IPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>[]
          }
          create: {
            args: Prisma.IPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          createMany: {
            args: Prisma.IPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          update: {
            args: Prisma.IPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          deleteMany: {
            args: Prisma.IPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPPayload>
          }
          aggregate: {
            args: Prisma.IPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIP>
          }
          groupBy: {
            args: Prisma.IPGroupByArgs<ExtArgs>
            result: $Utils.Optional<IPGroupByOutputType>[]
          }
          count: {
            args: Prisma.IPCountArgs<ExtArgs>
            result: $Utils.Optional<IPCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      Eventattendee: {
        payload: Prisma.$EventattendeePayload<ExtArgs>
        fields: Prisma.EventattendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventattendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventattendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          findFirst: {
            args: Prisma.EventattendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventattendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          findMany: {
            args: Prisma.EventattendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>[]
          }
          create: {
            args: Prisma.EventattendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          createMany: {
            args: Prisma.EventattendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventattendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          update: {
            args: Prisma.EventattendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          deleteMany: {
            args: Prisma.EventattendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventattendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventattendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventattendeePayload>
          }
          aggregate: {
            args: Prisma.EventattendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventattendee>
          }
          groupBy: {
            args: Prisma.EventattendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventattendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventattendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventattendeeCountAggregateOutputType> | number
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
    iP?: IPOmit
    event?: EventOmit
    attendee?: AttendeeOmit
    venue?: VenueOmit
    eventattendee?: EventattendeeOmit
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    Eventattendee: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Eventattendee?: boolean | EventCountOutputTypeCountEventattendeeArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventattendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventattendeeWhereInput
  }


  /**
   * Count Type AttendeeCountOutputType
   */

  export type AttendeeCountOutputType = {
    Eventattendee: number
  }

  export type AttendeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Eventattendee?: boolean | AttendeeCountOutputTypeCountEventattendeeArgs
  }

  // Custom InputTypes
  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendeeCountOutputType
     */
    select?: AttendeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountEventattendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventattendeeWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    Event: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | VenueCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model IP
   */

  export type AggregateIP = {
    _count: IPCountAggregateOutputType | null
    _avg: IPAvgAggregateOutputType | null
    _sum: IPSumAggregateOutputType | null
    _min: IPMinAggregateOutputType | null
    _max: IPMaxAggregateOutputType | null
  }

  export type IPAvgAggregateOutputType = {
    id: number | null
  }

  export type IPSumAggregateOutputType = {
    id: number | null
  }

  export type IPMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type IPMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type IPCountAggregateOutputType = {
    id: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type IPAvgAggregateInputType = {
    id?: true
  }

  export type IPSumAggregateInputType = {
    id?: true
  }

  export type IPMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type IPMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type IPCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type IPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IP to aggregate.
     */
    where?: IPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPS to fetch.
     */
    orderBy?: IPOrderByWithRelationInput | IPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IPS
    **/
    _count?: true | IPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IPMaxAggregateInputType
  }

  export type GetIPAggregateType<T extends IPAggregateArgs> = {
        [P in keyof T & keyof AggregateIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIP[P]>
      : GetScalarType<T[P], AggregateIP[P]>
  }




  export type IPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IPWhereInput
    orderBy?: IPOrderByWithAggregationInput | IPOrderByWithAggregationInput[]
    by: IPScalarFieldEnum[] | IPScalarFieldEnum
    having?: IPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IPCountAggregateInputType | true
    _avg?: IPAvgAggregateInputType
    _sum?: IPSumAggregateInputType
    _min?: IPMinAggregateInputType
    _max?: IPMaxAggregateInputType
  }

  export type IPGroupByOutputType = {
    id: number
    name: string
    password: string
    role: $Enums.Role
    _count: IPCountAggregateOutputType | null
    _avg: IPAvgAggregateOutputType | null
    _sum: IPSumAggregateOutputType | null
    _min: IPMinAggregateOutputType | null
    _max: IPMaxAggregateOutputType | null
  }

  type GetIPGroupByPayload<T extends IPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IPGroupByOutputType[P]>
            : GetScalarType<T[P], IPGroupByOutputType[P]>
        }
      >
    >


  export type IPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["iP"]>



  export type IPSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type IPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "role", ExtArgs["result"]["iP"]>

  export type $IPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["iP"]>
    composites: {}
  }

  type IPGetPayload<S extends boolean | null | undefined | IPDefaultArgs> = $Result.GetResult<Prisma.$IPPayload, S>

  type IPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IPCountAggregateInputType | true
    }

  export interface IPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IP'], meta: { name: 'IP' } }
    /**
     * Find zero or one IP that matches the filter.
     * @param {IPFindUniqueArgs} args - Arguments to find a IP
     * @example
     * // Get one IP
     * const iP = await prisma.iP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IPFindUniqueArgs>(args: SelectSubset<T, IPFindUniqueArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IPFindUniqueOrThrowArgs} args - Arguments to find a IP
     * @example
     * // Get one IP
     * const iP = await prisma.iP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IPFindUniqueOrThrowArgs>(args: SelectSubset<T, IPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPFindFirstArgs} args - Arguments to find a IP
     * @example
     * // Get one IP
     * const iP = await prisma.iP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IPFindFirstArgs>(args?: SelectSubset<T, IPFindFirstArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPFindFirstOrThrowArgs} args - Arguments to find a IP
     * @example
     * // Get one IP
     * const iP = await prisma.iP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IPFindFirstOrThrowArgs>(args?: SelectSubset<T, IPFindFirstOrThrowArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IPS
     * const iPS = await prisma.iP.findMany()
     * 
     * // Get first 10 IPS
     * const iPS = await prisma.iP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iPWithIdOnly = await prisma.iP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IPFindManyArgs>(args?: SelectSubset<T, IPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IP.
     * @param {IPCreateArgs} args - Arguments to create a IP.
     * @example
     * // Create one IP
     * const IP = await prisma.iP.create({
     *   data: {
     *     // ... data to create a IP
     *   }
     * })
     * 
     */
    create<T extends IPCreateArgs>(args: SelectSubset<T, IPCreateArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IPS.
     * @param {IPCreateManyArgs} args - Arguments to create many IPS.
     * @example
     * // Create many IPS
     * const iP = await prisma.iP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IPCreateManyArgs>(args?: SelectSubset<T, IPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IP.
     * @param {IPDeleteArgs} args - Arguments to delete one IP.
     * @example
     * // Delete one IP
     * const IP = await prisma.iP.delete({
     *   where: {
     *     // ... filter to delete one IP
     *   }
     * })
     * 
     */
    delete<T extends IPDeleteArgs>(args: SelectSubset<T, IPDeleteArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IP.
     * @param {IPUpdateArgs} args - Arguments to update one IP.
     * @example
     * // Update one IP
     * const iP = await prisma.iP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IPUpdateArgs>(args: SelectSubset<T, IPUpdateArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IPS.
     * @param {IPDeleteManyArgs} args - Arguments to filter IPS to delete.
     * @example
     * // Delete a few IPS
     * const { count } = await prisma.iP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IPDeleteManyArgs>(args?: SelectSubset<T, IPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IPS
     * const iP = await prisma.iP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IPUpdateManyArgs>(args: SelectSubset<T, IPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IP.
     * @param {IPUpsertArgs} args - Arguments to update or create a IP.
     * @example
     * // Update or create a IP
     * const iP = await prisma.iP.upsert({
     *   create: {
     *     // ... data to create a IP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IP we want to update
     *   }
     * })
     */
    upsert<T extends IPUpsertArgs>(args: SelectSubset<T, IPUpsertArgs<ExtArgs>>): Prisma__IPClient<$Result.GetResult<Prisma.$IPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPCountArgs} args - Arguments to filter IPS to count.
     * @example
     * // Count the number of IPS
     * const count = await prisma.iP.count({
     *   where: {
     *     // ... the filter for the IPS we want to count
     *   }
     * })
    **/
    count<T extends IPCountArgs>(
      args?: Subset<T, IPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IPAggregateArgs>(args: Subset<T, IPAggregateArgs>): Prisma.PrismaPromise<GetIPAggregateType<T>>

    /**
     * Group by IP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPGroupByArgs} args - Group by arguments.
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
      T extends IPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IPGroupByArgs['orderBy'] }
        : { orderBy?: IPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IP model
   */
  readonly fields: IPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IP model
   */
  interface IPFieldRefs {
    readonly id: FieldRef<"IP", 'Int'>
    readonly name: FieldRef<"IP", 'String'>
    readonly password: FieldRef<"IP", 'String'>
    readonly role: FieldRef<"IP", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * IP findUnique
   */
  export type IPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter, which IP to fetch.
     */
    where: IPWhereUniqueInput
  }

  /**
   * IP findUniqueOrThrow
   */
  export type IPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter, which IP to fetch.
     */
    where: IPWhereUniqueInput
  }

  /**
   * IP findFirst
   */
  export type IPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter, which IP to fetch.
     */
    where?: IPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPS to fetch.
     */
    orderBy?: IPOrderByWithRelationInput | IPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPS.
     */
    cursor?: IPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPS.
     */
    distinct?: IPScalarFieldEnum | IPScalarFieldEnum[]
  }

  /**
   * IP findFirstOrThrow
   */
  export type IPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter, which IP to fetch.
     */
    where?: IPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPS to fetch.
     */
    orderBy?: IPOrderByWithRelationInput | IPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPS.
     */
    cursor?: IPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPS.
     */
    distinct?: IPScalarFieldEnum | IPScalarFieldEnum[]
  }

  /**
   * IP findMany
   */
  export type IPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter, which IPS to fetch.
     */
    where?: IPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPS to fetch.
     */
    orderBy?: IPOrderByWithRelationInput | IPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IPS.
     */
    cursor?: IPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPS.
     */
    skip?: number
    distinct?: IPScalarFieldEnum | IPScalarFieldEnum[]
  }

  /**
   * IP create
   */
  export type IPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * The data needed to create a IP.
     */
    data: XOR<IPCreateInput, IPUncheckedCreateInput>
  }

  /**
   * IP createMany
   */
  export type IPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IPS.
     */
    data: IPCreateManyInput | IPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IP update
   */
  export type IPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * The data needed to update a IP.
     */
    data: XOR<IPUpdateInput, IPUncheckedUpdateInput>
    /**
     * Choose, which IP to update.
     */
    where: IPWhereUniqueInput
  }

  /**
   * IP updateMany
   */
  export type IPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IPS.
     */
    data: XOR<IPUpdateManyMutationInput, IPUncheckedUpdateManyInput>
    /**
     * Filter which IPS to update
     */
    where?: IPWhereInput
    /**
     * Limit how many IPS to update.
     */
    limit?: number
  }

  /**
   * IP upsert
   */
  export type IPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * The filter to search for the IP to update in case it exists.
     */
    where: IPWhereUniqueInput
    /**
     * In case the IP found by the `where` argument doesn't exist, create a new IP with this data.
     */
    create: XOR<IPCreateInput, IPUncheckedCreateInput>
    /**
     * In case the IP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IPUpdateInput, IPUncheckedUpdateInput>
  }

  /**
   * IP delete
   */
  export type IPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
    /**
     * Filter which IP to delete.
     */
    where: IPWhereUniqueInput
  }

  /**
   * IP deleteMany
   */
  export type IPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IPS to delete
     */
    where?: IPWhereInput
    /**
     * Limit how many IPS to delete.
     */
    limit?: number
  }

  /**
   * IP without action
   */
  export type IPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IP
     */
    select?: IPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IP
     */
    omit?: IPOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    venueid: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    venueid: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    data: Date | null
    venueid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    data: Date | null
    venueid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    data: number
    venueid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    venueid?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    venueid?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    data?: true
    venueid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    data?: true
    venueid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    data?: true
    venueid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string | null
    data: Date
    venueid: number
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    data?: boolean
    venueid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    Eventattendee?: boolean | Event$EventattendeeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    data?: boolean
    venueid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "data" | "venueid" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    Eventattendee?: boolean | Event$EventattendeeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      Eventattendee: Prisma.$EventattendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      data: Date
      venueid: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Eventattendee<T extends Event$EventattendeeArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventattendeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly data: FieldRef<"Event", 'DateTime'>
    readonly venueid: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.Eventattendee
   */
  export type Event$EventattendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    where?: EventattendeeWhereInput
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    cursor?: EventattendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventattendeeScalarFieldEnum | EventattendeeScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Attendee
   */

  export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null
    _avg: AttendeeAvgAggregateOutputType | null
    _sum: AttendeeSumAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  export type AttendeeAvgAggregateOutputType = {
    id: number | null
  }

  export type AttendeeSumAggregateOutputType = {
    id: number | null
  }

  export type AttendeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    registerdAt: Date | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    registerdAt: Date | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    registerdAt: number
    _all: number
  }


  export type AttendeeAvgAggregateInputType = {
    id?: true
  }

  export type AttendeeSumAggregateInputType = {
    id?: true
  }

  export type AttendeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerdAt?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerdAt?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registerdAt?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendee to aggregate.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeeMaxAggregateInputType
  }

  export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendee[P]>
      : GetScalarType<T[P], AggregateAttendee[P]>
  }




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithAggregationInput | AttendeeOrderByWithAggregationInput[]
    by: AttendeeScalarFieldEnum[] | AttendeeScalarFieldEnum
    having?: AttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeeCountAggregateInputType | true
    _avg?: AttendeeAvgAggregateInputType
    _sum?: AttendeeSumAggregateInputType
    _min?: AttendeeMinAggregateInputType
    _max?: AttendeeMaxAggregateInputType
  }

  export type AttendeeGroupByOutputType = {
    id: number
    name: string
    email: string
    registerdAt: Date
    _count: AttendeeCountAggregateOutputType | null
    _avg: AttendeeAvgAggregateOutputType | null
    _sum: AttendeeSumAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
        }
      >
    >


  export type AttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registerdAt?: boolean
    Eventattendee?: boolean | Attendee$EventattendeeArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>



  export type AttendeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    registerdAt?: boolean
  }

  export type AttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "registerdAt", ExtArgs["result"]["attendee"]>
  export type AttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Eventattendee?: boolean | Attendee$EventattendeeArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      Eventattendee: Prisma.$EventattendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      registerdAt: Date
    }, ExtArgs["result"]["attendee"]>
    composites: {}
  }

  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendee'], meta: { name: 'Attendee' } }
    /**
     * Find zero or one Attendee that matches the filter.
     * @param {AttendeeFindUniqueArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeeFindUniqueArgs>(args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeeFindFirstArgs>(args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendee.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeeWithIdOnly = await prisma.attendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeeFindManyArgs>(args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendee.
     * @param {AttendeeCreateArgs} args - Arguments to create a Attendee.
     * @example
     * // Create one Attendee
     * const Attendee = await prisma.attendee.create({
     *   data: {
     *     // ... data to create a Attendee
     *   }
     * })
     * 
     */
    create<T extends AttendeeCreateArgs>(args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeeCreateManyArgs>(args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendee.
     * @param {AttendeeDeleteArgs} args - Arguments to delete one Attendee.
     * @example
     * // Delete one Attendee
     * const Attendee = await prisma.attendee.delete({
     *   where: {
     *     // ... filter to delete one Attendee
     *   }
     * })
     * 
     */
    delete<T extends AttendeeDeleteArgs>(args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendee.
     * @param {AttendeeUpdateArgs} args - Arguments to update one Attendee.
     * @example
     * // Update one Attendee
     * const attendee = await prisma.attendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeeUpdateArgs>(args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeeDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeeUpdateManyArgs>(args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendee.
     * @param {AttendeeUpsertArgs} args - Arguments to update or create a Attendee.
     * @example
     * // Update or create a Attendee
     * const attendee = await prisma.attendee.upsert({
     *   create: {
     *     // ... data to create a Attendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendee we want to update
     *   }
     * })
     */
    upsert<T extends AttendeeUpsertArgs>(args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendee.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeeCountArgs>(
      args?: Subset<T, AttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendeeAggregateArgs>(args: Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>

    /**
     * Group by Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeGroupByArgs} args - Group by arguments.
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
      T extends AttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeeGroupByArgs['orderBy'] }
        : { orderBy?: AttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendee model
   */
  readonly fields: AttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Eventattendee<T extends Attendee$EventattendeeArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$EventattendeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attendee model
   */
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'Int'>
    readonly name: FieldRef<"Attendee", 'String'>
    readonly email: FieldRef<"Attendee", 'String'>
    readonly registerdAt: FieldRef<"Attendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findUniqueOrThrow
   */
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findFirst
   */
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findFirstOrThrow
   */
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findMany
   */
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee create
   */
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendee.
     */
    data: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
  }

  /**
   * Attendee createMany
   */
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendee.
     */
    data: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
    /**
     * Choose, which Attendee to update.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee updateMany
   */
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendee to update in case it exists.
     */
    where: AttendeeWhereUniqueInput
    /**
     * In case the Attendee found by the `where` argument doesn't exist, create a new Attendee with this data.
     */
    create: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
    /**
     * In case the Attendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
  }

  /**
   * Attendee delete
   */
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter which Attendee to delete.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee deleteMany
   */
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendee.Eventattendee
   */
  export type Attendee$EventattendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    where?: EventattendeeWhereInput
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    cursor?: EventattendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventattendeeScalarFieldEnum | EventattendeeScalarFieldEnum[]
  }

  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type VenueSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: number | null
    venuename: string | null
    address: string | null
    capacity: number | null
  }

  export type VenueMaxAggregateOutputType = {
    id: number | null
    venuename: string | null
    address: string | null
    capacity: number | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    venuename: number
    address: number
    capacity: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VenueSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    venuename?: true
    address?: true
    capacity?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    venuename?: true
    address?: true
    capacity?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    venuename?: true
    address?: true
    capacity?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: number
    venuename: string
    address: string
    capacity: number
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venuename?: boolean
    address?: boolean
    capacity?: boolean
    Event?: boolean | Venue$EventArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>



  export type VenueSelectScalar = {
    id?: boolean
    venuename?: boolean
    address?: boolean
    capacity?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venuename" | "address" | "capacity", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Venue$EventArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venuename: string
      address: string
      capacity: number
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Venue$EventArgs<ExtArgs> = {}>(args?: Subset<T, Venue$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'Int'>
    readonly venuename: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly capacity: FieldRef<"Venue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.Event
   */
  export type Venue$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model Eventattendee
   */

  export type AggregateEventattendee = {
    _count: EventattendeeCountAggregateOutputType | null
    _avg: EventattendeeAvgAggregateOutputType | null
    _sum: EventattendeeSumAggregateOutputType | null
    _min: EventattendeeMinAggregateOutputType | null
    _max: EventattendeeMaxAggregateOutputType | null
  }

  export type EventattendeeAvgAggregateOutputType = {
    id: number | null
    eventid: number | null
    attendeeid: number | null
  }

  export type EventattendeeSumAggregateOutputType = {
    id: number | null
    eventid: number | null
    attendeeid: number | null
  }

  export type EventattendeeMinAggregateOutputType = {
    id: number | null
    eventid: number | null
    attendeeid: number | null
    registeredAt: Date | null
  }

  export type EventattendeeMaxAggregateOutputType = {
    id: number | null
    eventid: number | null
    attendeeid: number | null
    registeredAt: Date | null
  }

  export type EventattendeeCountAggregateOutputType = {
    id: number
    eventid: number
    attendeeid: number
    registeredAt: number
    _all: number
  }


  export type EventattendeeAvgAggregateInputType = {
    id?: true
    eventid?: true
    attendeeid?: true
  }

  export type EventattendeeSumAggregateInputType = {
    id?: true
    eventid?: true
    attendeeid?: true
  }

  export type EventattendeeMinAggregateInputType = {
    id?: true
    eventid?: true
    attendeeid?: true
    registeredAt?: true
  }

  export type EventattendeeMaxAggregateInputType = {
    id?: true
    eventid?: true
    attendeeid?: true
    registeredAt?: true
  }

  export type EventattendeeCountAggregateInputType = {
    id?: true
    eventid?: true
    attendeeid?: true
    registeredAt?: true
    _all?: true
  }

  export type EventattendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventattendee to aggregate.
     */
    where?: EventattendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventattendees to fetch.
     */
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventattendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventattendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventattendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventattendees
    **/
    _count?: true | EventattendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventattendeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventattendeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventattendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventattendeeMaxAggregateInputType
  }

  export type GetEventattendeeAggregateType<T extends EventattendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventattendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventattendee[P]>
      : GetScalarType<T[P], AggregateEventattendee[P]>
  }




  export type EventattendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventattendeeWhereInput
    orderBy?: EventattendeeOrderByWithAggregationInput | EventattendeeOrderByWithAggregationInput[]
    by: EventattendeeScalarFieldEnum[] | EventattendeeScalarFieldEnum
    having?: EventattendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventattendeeCountAggregateInputType | true
    _avg?: EventattendeeAvgAggregateInputType
    _sum?: EventattendeeSumAggregateInputType
    _min?: EventattendeeMinAggregateInputType
    _max?: EventattendeeMaxAggregateInputType
  }

  export type EventattendeeGroupByOutputType = {
    id: number
    eventid: number
    attendeeid: number
    registeredAt: Date
    _count: EventattendeeCountAggregateOutputType | null
    _avg: EventattendeeAvgAggregateOutputType | null
    _sum: EventattendeeSumAggregateOutputType | null
    _min: EventattendeeMinAggregateOutputType | null
    _max: EventattendeeMaxAggregateOutputType | null
  }

  type GetEventattendeeGroupByPayload<T extends EventattendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventattendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventattendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventattendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventattendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventattendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventid?: boolean
    attendeeid?: boolean
    registeredAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    attendee?: boolean | AttendeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventattendee"]>



  export type EventattendeeSelectScalar = {
    id?: boolean
    eventid?: boolean
    attendeeid?: boolean
    registeredAt?: boolean
  }

  export type EventattendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventid" | "attendeeid" | "registeredAt", ExtArgs["result"]["eventattendee"]>
  export type EventattendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    attendee?: boolean | AttendeeDefaultArgs<ExtArgs>
  }

  export type $EventattendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventattendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      attendee: Prisma.$AttendeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventid: number
      attendeeid: number
      registeredAt: Date
    }, ExtArgs["result"]["eventattendee"]>
    composites: {}
  }

  type EventattendeeGetPayload<S extends boolean | null | undefined | EventattendeeDefaultArgs> = $Result.GetResult<Prisma.$EventattendeePayload, S>

  type EventattendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventattendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventattendeeCountAggregateInputType | true
    }

  export interface EventattendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventattendee'], meta: { name: 'Eventattendee' } }
    /**
     * Find zero or one Eventattendee that matches the filter.
     * @param {EventattendeeFindUniqueArgs} args - Arguments to find a Eventattendee
     * @example
     * // Get one Eventattendee
     * const eventattendee = await prisma.eventattendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventattendeeFindUniqueArgs>(args: SelectSubset<T, EventattendeeFindUniqueArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventattendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventattendeeFindUniqueOrThrowArgs} args - Arguments to find a Eventattendee
     * @example
     * // Get one Eventattendee
     * const eventattendee = await prisma.eventattendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventattendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventattendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventattendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeFindFirstArgs} args - Arguments to find a Eventattendee
     * @example
     * // Get one Eventattendee
     * const eventattendee = await prisma.eventattendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventattendeeFindFirstArgs>(args?: SelectSubset<T, EventattendeeFindFirstArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventattendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeFindFirstOrThrowArgs} args - Arguments to find a Eventattendee
     * @example
     * // Get one Eventattendee
     * const eventattendee = await prisma.eventattendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventattendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventattendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventattendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventattendees
     * const eventattendees = await prisma.eventattendee.findMany()
     * 
     * // Get first 10 Eventattendees
     * const eventattendees = await prisma.eventattendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventattendeeWithIdOnly = await prisma.eventattendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventattendeeFindManyArgs>(args?: SelectSubset<T, EventattendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventattendee.
     * @param {EventattendeeCreateArgs} args - Arguments to create a Eventattendee.
     * @example
     * // Create one Eventattendee
     * const Eventattendee = await prisma.eventattendee.create({
     *   data: {
     *     // ... data to create a Eventattendee
     *   }
     * })
     * 
     */
    create<T extends EventattendeeCreateArgs>(args: SelectSubset<T, EventattendeeCreateArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventattendees.
     * @param {EventattendeeCreateManyArgs} args - Arguments to create many Eventattendees.
     * @example
     * // Create many Eventattendees
     * const eventattendee = await prisma.eventattendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventattendeeCreateManyArgs>(args?: SelectSubset<T, EventattendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Eventattendee.
     * @param {EventattendeeDeleteArgs} args - Arguments to delete one Eventattendee.
     * @example
     * // Delete one Eventattendee
     * const Eventattendee = await prisma.eventattendee.delete({
     *   where: {
     *     // ... filter to delete one Eventattendee
     *   }
     * })
     * 
     */
    delete<T extends EventattendeeDeleteArgs>(args: SelectSubset<T, EventattendeeDeleteArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventattendee.
     * @param {EventattendeeUpdateArgs} args - Arguments to update one Eventattendee.
     * @example
     * // Update one Eventattendee
     * const eventattendee = await prisma.eventattendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventattendeeUpdateArgs>(args: SelectSubset<T, EventattendeeUpdateArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventattendees.
     * @param {EventattendeeDeleteManyArgs} args - Arguments to filter Eventattendees to delete.
     * @example
     * // Delete a few Eventattendees
     * const { count } = await prisma.eventattendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventattendeeDeleteManyArgs>(args?: SelectSubset<T, EventattendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventattendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventattendees
     * const eventattendee = await prisma.eventattendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventattendeeUpdateManyArgs>(args: SelectSubset<T, EventattendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventattendee.
     * @param {EventattendeeUpsertArgs} args - Arguments to update or create a Eventattendee.
     * @example
     * // Update or create a Eventattendee
     * const eventattendee = await prisma.eventattendee.upsert({
     *   create: {
     *     // ... data to create a Eventattendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventattendee we want to update
     *   }
     * })
     */
    upsert<T extends EventattendeeUpsertArgs>(args: SelectSubset<T, EventattendeeUpsertArgs<ExtArgs>>): Prisma__EventattendeeClient<$Result.GetResult<Prisma.$EventattendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventattendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeCountArgs} args - Arguments to filter Eventattendees to count.
     * @example
     * // Count the number of Eventattendees
     * const count = await prisma.eventattendee.count({
     *   where: {
     *     // ... the filter for the Eventattendees we want to count
     *   }
     * })
    **/
    count<T extends EventattendeeCountArgs>(
      args?: Subset<T, EventattendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventattendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventattendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventattendeeAggregateArgs>(args: Subset<T, EventattendeeAggregateArgs>): Prisma.PrismaPromise<GetEventattendeeAggregateType<T>>

    /**
     * Group by Eventattendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventattendeeGroupByArgs} args - Group by arguments.
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
      T extends EventattendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventattendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventattendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventattendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventattendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventattendee model
   */
  readonly fields: EventattendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventattendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventattendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendee<T extends AttendeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendeeDefaultArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Eventattendee model
   */
  interface EventattendeeFieldRefs {
    readonly id: FieldRef<"Eventattendee", 'Int'>
    readonly eventid: FieldRef<"Eventattendee", 'Int'>
    readonly attendeeid: FieldRef<"Eventattendee", 'Int'>
    readonly registeredAt: FieldRef<"Eventattendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Eventattendee findUnique
   */
  export type EventattendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter, which Eventattendee to fetch.
     */
    where: EventattendeeWhereUniqueInput
  }

  /**
   * Eventattendee findUniqueOrThrow
   */
  export type EventattendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter, which Eventattendee to fetch.
     */
    where: EventattendeeWhereUniqueInput
  }

  /**
   * Eventattendee findFirst
   */
  export type EventattendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter, which Eventattendee to fetch.
     */
    where?: EventattendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventattendees to fetch.
     */
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventattendees.
     */
    cursor?: EventattendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventattendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventattendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventattendees.
     */
    distinct?: EventattendeeScalarFieldEnum | EventattendeeScalarFieldEnum[]
  }

  /**
   * Eventattendee findFirstOrThrow
   */
  export type EventattendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter, which Eventattendee to fetch.
     */
    where?: EventattendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventattendees to fetch.
     */
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventattendees.
     */
    cursor?: EventattendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventattendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventattendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventattendees.
     */
    distinct?: EventattendeeScalarFieldEnum | EventattendeeScalarFieldEnum[]
  }

  /**
   * Eventattendee findMany
   */
  export type EventattendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter, which Eventattendees to fetch.
     */
    where?: EventattendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventattendees to fetch.
     */
    orderBy?: EventattendeeOrderByWithRelationInput | EventattendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventattendees.
     */
    cursor?: EventattendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventattendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventattendees.
     */
    skip?: number
    distinct?: EventattendeeScalarFieldEnum | EventattendeeScalarFieldEnum[]
  }

  /**
   * Eventattendee create
   */
  export type EventattendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventattendee.
     */
    data: XOR<EventattendeeCreateInput, EventattendeeUncheckedCreateInput>
  }

  /**
   * Eventattendee createMany
   */
  export type EventattendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventattendees.
     */
    data: EventattendeeCreateManyInput | EventattendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventattendee update
   */
  export type EventattendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventattendee.
     */
    data: XOR<EventattendeeUpdateInput, EventattendeeUncheckedUpdateInput>
    /**
     * Choose, which Eventattendee to update.
     */
    where: EventattendeeWhereUniqueInput
  }

  /**
   * Eventattendee updateMany
   */
  export type EventattendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventattendees.
     */
    data: XOR<EventattendeeUpdateManyMutationInput, EventattendeeUncheckedUpdateManyInput>
    /**
     * Filter which Eventattendees to update
     */
    where?: EventattendeeWhereInput
    /**
     * Limit how many Eventattendees to update.
     */
    limit?: number
  }

  /**
   * Eventattendee upsert
   */
  export type EventattendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventattendee to update in case it exists.
     */
    where: EventattendeeWhereUniqueInput
    /**
     * In case the Eventattendee found by the `where` argument doesn't exist, create a new Eventattendee with this data.
     */
    create: XOR<EventattendeeCreateInput, EventattendeeUncheckedCreateInput>
    /**
     * In case the Eventattendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventattendeeUpdateInput, EventattendeeUncheckedUpdateInput>
  }

  /**
   * Eventattendee delete
   */
  export type EventattendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
    /**
     * Filter which Eventattendee to delete.
     */
    where: EventattendeeWhereUniqueInput
  }

  /**
   * Eventattendee deleteMany
   */
  export type EventattendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventattendees to delete
     */
    where?: EventattendeeWhereInput
    /**
     * Limit how many Eventattendees to delete.
     */
    limit?: number
  }

  /**
   * Eventattendee without action
   */
  export type EventattendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventattendee
     */
    select?: EventattendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Eventattendee
     */
    omit?: EventattendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventattendeeInclude<ExtArgs> | null
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


  export const IPScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type IPScalarFieldEnum = (typeof IPScalarFieldEnum)[keyof typeof IPScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    data: 'data',
    venueid: 'venueid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    registerdAt: 'registerdAt'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    venuename: 'venuename',
    address: 'address',
    capacity: 'capacity'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const EventattendeeScalarFieldEnum: {
    id: 'id',
    eventid: 'eventid',
    attendeeid: 'attendeeid',
    registeredAt: 'registeredAt'
  };

  export type EventattendeeScalarFieldEnum = (typeof EventattendeeScalarFieldEnum)[keyof typeof EventattendeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const IPOrderByRelevanceFieldEnum: {
    name: 'name',
    password: 'password'
  };

  export type IPOrderByRelevanceFieldEnum = (typeof IPOrderByRelevanceFieldEnum)[keyof typeof IPOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EventOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const AttendeeOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email'
  };

  export type AttendeeOrderByRelevanceFieldEnum = (typeof AttendeeOrderByRelevanceFieldEnum)[keyof typeof AttendeeOrderByRelevanceFieldEnum]


  export const VenueOrderByRelevanceFieldEnum: {
    venuename: 'venuename',
    address: 'address'
  };

  export type VenueOrderByRelevanceFieldEnum = (typeof VenueOrderByRelevanceFieldEnum)[keyof typeof VenueOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type IPWhereInput = {
    AND?: IPWhereInput | IPWhereInput[]
    OR?: IPWhereInput[]
    NOT?: IPWhereInput | IPWhereInput[]
    id?: IntFilter<"IP"> | number
    name?: StringFilter<"IP"> | string
    password?: StringFilter<"IP"> | string
    role?: EnumRoleFilter<"IP"> | $Enums.Role
  }

  export type IPOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _relevance?: IPOrderByRelevanceInput
  }

  export type IPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IPWhereInput | IPWhereInput[]
    OR?: IPWhereInput[]
    NOT?: IPWhereInput | IPWhereInput[]
    password?: StringFilter<"IP"> | string
    role?: EnumRoleFilter<"IP"> | $Enums.Role
  }, "id" | "name">

  export type IPOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: IPCountOrderByAggregateInput
    _avg?: IPAvgOrderByAggregateInput
    _max?: IPMaxOrderByAggregateInput
    _min?: IPMinOrderByAggregateInput
    _sum?: IPSumOrderByAggregateInput
  }

  export type IPScalarWhereWithAggregatesInput = {
    AND?: IPScalarWhereWithAggregatesInput | IPScalarWhereWithAggregatesInput[]
    OR?: IPScalarWhereWithAggregatesInput[]
    NOT?: IPScalarWhereWithAggregatesInput | IPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IP"> | number
    name?: StringWithAggregatesFilter<"IP"> | string
    password?: StringWithAggregatesFilter<"IP"> | string
    role?: EnumRoleWithAggregatesFilter<"IP"> | $Enums.Role
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    data?: DateTimeFilter<"Event"> | Date | string
    venueid?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    Eventattendee?: EventattendeeListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    data?: SortOrder
    venueid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
    Eventattendee?: EventattendeeOrderByRelationAggregateInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    data?: DateTimeFilter<"Event"> | Date | string
    venueid?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    Eventattendee?: EventattendeeListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    data?: SortOrder
    venueid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    data?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    venueid?: IntWithAggregatesFilter<"Event"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: IntFilter<"Attendee"> | number
    name?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    registerdAt?: DateTimeFilter<"Attendee"> | Date | string
    Eventattendee?: EventattendeeListRelationFilter
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerdAt?: SortOrder
    Eventattendee?: EventattendeeOrderByRelationAggregateInput
    _relevance?: AttendeeOrderByRelevanceInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    name?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    registerdAt?: DateTimeFilter<"Attendee"> | Date | string
    Eventattendee?: EventattendeeListRelationFilter
  }, "id">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerdAt?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _avg?: AttendeeAvgOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
    _sum?: AttendeeSumOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendee"> | number
    name?: StringWithAggregatesFilter<"Attendee"> | string
    email?: StringWithAggregatesFilter<"Attendee"> | string
    registerdAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: IntFilter<"Venue"> | number
    venuename?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    capacity?: IntFilter<"Venue"> | number
    Event?: EventListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    venuename?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    Event?: EventOrderByRelationAggregateInput
    _relevance?: VenueOrderByRelevanceInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    venuename?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    capacity?: IntFilter<"Venue"> | number
    Event?: EventListRelationFilter
  }, "id" | "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    venuename?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venue"> | number
    venuename?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    capacity?: IntWithAggregatesFilter<"Venue"> | number
  }

  export type EventattendeeWhereInput = {
    AND?: EventattendeeWhereInput | EventattendeeWhereInput[]
    OR?: EventattendeeWhereInput[]
    NOT?: EventattendeeWhereInput | EventattendeeWhereInput[]
    id?: IntFilter<"Eventattendee"> | number
    eventid?: IntFilter<"Eventattendee"> | number
    attendeeid?: IntFilter<"Eventattendee"> | number
    registeredAt?: DateTimeFilter<"Eventattendee"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    attendee?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
  }

  export type EventattendeeOrderByWithRelationInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
    registeredAt?: SortOrder
    event?: EventOrderByWithRelationInput
    attendee?: AttendeeOrderByWithRelationInput
  }

  export type EventattendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eventid_attendeeid?: EventattendeeEventidAttendeeidCompoundUniqueInput
    AND?: EventattendeeWhereInput | EventattendeeWhereInput[]
    OR?: EventattendeeWhereInput[]
    NOT?: EventattendeeWhereInput | EventattendeeWhereInput[]
    eventid?: IntFilter<"Eventattendee"> | number
    attendeeid?: IntFilter<"Eventattendee"> | number
    registeredAt?: DateTimeFilter<"Eventattendee"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    attendee?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
  }, "id" | "eventid_attendeeid">

  export type EventattendeeOrderByWithAggregationInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
    registeredAt?: SortOrder
    _count?: EventattendeeCountOrderByAggregateInput
    _avg?: EventattendeeAvgOrderByAggregateInput
    _max?: EventattendeeMaxOrderByAggregateInput
    _min?: EventattendeeMinOrderByAggregateInput
    _sum?: EventattendeeSumOrderByAggregateInput
  }

  export type EventattendeeScalarWhereWithAggregatesInput = {
    AND?: EventattendeeScalarWhereWithAggregatesInput | EventattendeeScalarWhereWithAggregatesInput[]
    OR?: EventattendeeScalarWhereWithAggregatesInput[]
    NOT?: EventattendeeScalarWhereWithAggregatesInput | EventattendeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Eventattendee"> | number
    eventid?: IntWithAggregatesFilter<"Eventattendee"> | number
    attendeeid?: IntWithAggregatesFilter<"Eventattendee"> | number
    registeredAt?: DateTimeWithAggregatesFilter<"Eventattendee"> | Date | string
  }

  export type IPCreateInput = {
    name: string
    password: string
    role: $Enums.Role
  }

  export type IPUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    role: $Enums.Role
  }

  export type IPUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IPCreateManyInput = {
    id?: number
    name: string
    password: string
    role: $Enums.Role
  }

  export type IPUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EventCreateInput = {
    title: string
    description?: string | null
    data: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    venue: VenueCreateNestedOneWithoutEventInput
    Eventattendee?: EventattendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    data: Date | string
    venueid: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Eventattendee?: EventattendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutEventNestedInput
    Eventattendee?: EventattendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    venueid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Eventattendee?: EventattendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    data: Date | string
    venueid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    venueid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeCreateInput = {
    name: string
    email: string
    registerdAt?: Date | string
    Eventattendee?: EventattendeeCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    registerdAt?: Date | string
    Eventattendee?: EventattendeeUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Eventattendee?: EventattendeeUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Eventattendee?: EventattendeeUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeCreateManyInput = {
    id?: number
    name: string
    email: string
    registerdAt?: Date | string
  }

  export type AttendeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id: number
    venuename: string
    address: string
    capacity: number
    Event?: EventCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id: number
    venuename: string
    address: string
    capacity: number
    Event?: EventUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    Event?: EventUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    Event?: EventUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id: number
    venuename: string
    address: string
    capacity: number
  }

  export type VenueUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type EventattendeeCreateInput = {
    registeredAt?: Date | string
    event: EventCreateNestedOneWithoutEventattendeeInput
    attendee: AttendeeCreateNestedOneWithoutEventattendeeInput
  }

  export type EventattendeeUncheckedCreateInput = {
    id?: number
    eventid: number
    attendeeid: number
    registeredAt?: Date | string
  }

  export type EventattendeeUpdateInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventattendeeNestedInput
    attendee?: AttendeeUpdateOneRequiredWithoutEventattendeeNestedInput
  }

  export type EventattendeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventid?: IntFieldUpdateOperationsInput | number
    attendeeid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeCreateManyInput = {
    id?: number
    eventid: number
    attendeeid: number
    registeredAt?: Date | string
  }

  export type EventattendeeUpdateManyMutationInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventid?: IntFieldUpdateOperationsInput | number
    attendeeid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IPOrderByRelevanceInput = {
    fields: IPOrderByRelevanceFieldEnum | IPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IPCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type IPAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IPMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type IPMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type IPSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type EventattendeeListRelationFilter = {
    every?: EventattendeeWhereInput
    some?: EventattendeeWhereInput
    none?: EventattendeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventattendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data?: SortOrder
    venueid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    venueid?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data?: SortOrder
    venueid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data?: SortOrder
    venueid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    venueid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AttendeeOrderByRelevanceInput = {
    fields: AttendeeOrderByRelevanceFieldEnum | AttendeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerdAt?: SortOrder
  }

  export type AttendeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerdAt?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registerdAt?: SortOrder
  }

  export type AttendeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueOrderByRelevanceInput = {
    fields: VenueOrderByRelevanceFieldEnum | VenueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    venuename?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    venuename?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    venuename?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type AttendeeScalarRelationFilter = {
    is?: AttendeeWhereInput
    isNot?: AttendeeWhereInput
  }

  export type EventattendeeEventidAttendeeidCompoundUniqueInput = {
    eventid: number
    attendeeid: number
  }

  export type EventattendeeCountOrderByAggregateInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
    registeredAt?: SortOrder
  }

  export type EventattendeeAvgOrderByAggregateInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
  }

  export type EventattendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
    registeredAt?: SortOrder
  }

  export type EventattendeeMinOrderByAggregateInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
    registeredAt?: SortOrder
  }

  export type EventattendeeSumOrderByAggregateInput = {
    id?: SortOrder
    eventid?: SortOrder
    attendeeid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenueCreateNestedOneWithoutEventInput = {
    create?: XOR<VenueCreateWithoutEventInput, VenueUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventInput
    connect?: VenueWhereUniqueInput
  }

  export type EventattendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput> | EventattendeeCreateWithoutEventInput[] | EventattendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutEventInput | EventattendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventattendeeCreateManyEventInputEnvelope
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
  }

  export type EventattendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput> | EventattendeeCreateWithoutEventInput[] | EventattendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutEventInput | EventattendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventattendeeCreateManyEventInputEnvelope
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VenueUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<VenueCreateWithoutEventInput, VenueUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventInput
    upsert?: VenueUpsertWithoutEventInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutEventInput, VenueUpdateWithoutEventInput>, VenueUncheckedUpdateWithoutEventInput>
  }

  export type EventattendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput> | EventattendeeCreateWithoutEventInput[] | EventattendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutEventInput | EventattendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventattendeeUpsertWithWhereUniqueWithoutEventInput | EventattendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventattendeeCreateManyEventInputEnvelope
    set?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    disconnect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    delete?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    update?: EventattendeeUpdateWithWhereUniqueWithoutEventInput | EventattendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventattendeeUpdateManyWithWhereWithoutEventInput | EventattendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
  }

  export type EventattendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput> | EventattendeeCreateWithoutEventInput[] | EventattendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutEventInput | EventattendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventattendeeUpsertWithWhereUniqueWithoutEventInput | EventattendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventattendeeCreateManyEventInputEnvelope
    set?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    disconnect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    delete?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    update?: EventattendeeUpdateWithWhereUniqueWithoutEventInput | EventattendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventattendeeUpdateManyWithWhereWithoutEventInput | EventattendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
  }

  export type EventattendeeCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput> | EventattendeeCreateWithoutAttendeeInput[] | EventattendeeUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutAttendeeInput | EventattendeeCreateOrConnectWithoutAttendeeInput[]
    createMany?: EventattendeeCreateManyAttendeeInputEnvelope
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
  }

  export type EventattendeeUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput> | EventattendeeCreateWithoutAttendeeInput[] | EventattendeeUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutAttendeeInput | EventattendeeCreateOrConnectWithoutAttendeeInput[]
    createMany?: EventattendeeCreateManyAttendeeInputEnvelope
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
  }

  export type EventattendeeUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput> | EventattendeeCreateWithoutAttendeeInput[] | EventattendeeUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutAttendeeInput | EventattendeeCreateOrConnectWithoutAttendeeInput[]
    upsert?: EventattendeeUpsertWithWhereUniqueWithoutAttendeeInput | EventattendeeUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: EventattendeeCreateManyAttendeeInputEnvelope
    set?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    disconnect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    delete?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    update?: EventattendeeUpdateWithWhereUniqueWithoutAttendeeInput | EventattendeeUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: EventattendeeUpdateManyWithWhereWithoutAttendeeInput | EventattendeeUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
  }

  export type EventattendeeUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput> | EventattendeeCreateWithoutAttendeeInput[] | EventattendeeUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: EventattendeeCreateOrConnectWithoutAttendeeInput | EventattendeeCreateOrConnectWithoutAttendeeInput[]
    upsert?: EventattendeeUpsertWithWhereUniqueWithoutAttendeeInput | EventattendeeUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: EventattendeeCreateManyAttendeeInputEnvelope
    set?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    disconnect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    delete?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    connect?: EventattendeeWhereUniqueInput | EventattendeeWhereUniqueInput[]
    update?: EventattendeeUpdateWithWhereUniqueWithoutAttendeeInput | EventattendeeUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: EventattendeeUpdateManyWithWhereWithoutAttendeeInput | EventattendeeUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventattendeeInput = {
    create?: XOR<EventCreateWithoutEventattendeeInput, EventUncheckedCreateWithoutEventattendeeInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventattendeeInput
    connect?: EventWhereUniqueInput
  }

  export type AttendeeCreateNestedOneWithoutEventattendeeInput = {
    create?: XOR<AttendeeCreateWithoutEventattendeeInput, AttendeeUncheckedCreateWithoutEventattendeeInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventattendeeInput
    connect?: AttendeeWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventattendeeNestedInput = {
    create?: XOR<EventCreateWithoutEventattendeeInput, EventUncheckedCreateWithoutEventattendeeInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventattendeeInput
    upsert?: EventUpsertWithoutEventattendeeInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventattendeeInput, EventUpdateWithoutEventattendeeInput>, EventUncheckedUpdateWithoutEventattendeeInput>
  }

  export type AttendeeUpdateOneRequiredWithoutEventattendeeNestedInput = {
    create?: XOR<AttendeeCreateWithoutEventattendeeInput, AttendeeUncheckedCreateWithoutEventattendeeInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventattendeeInput
    upsert?: AttendeeUpsertWithoutEventattendeeInput
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutEventattendeeInput, AttendeeUpdateWithoutEventattendeeInput>, AttendeeUncheckedUpdateWithoutEventattendeeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VenueCreateWithoutEventInput = {
    id: number
    venuename: string
    address: string
    capacity: number
  }

  export type VenueUncheckedCreateWithoutEventInput = {
    id: number
    venuename: string
    address: string
    capacity: number
  }

  export type VenueCreateOrConnectWithoutEventInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutEventInput, VenueUncheckedCreateWithoutEventInput>
  }

  export type EventattendeeCreateWithoutEventInput = {
    registeredAt?: Date | string
    attendee: AttendeeCreateNestedOneWithoutEventattendeeInput
  }

  export type EventattendeeUncheckedCreateWithoutEventInput = {
    id?: number
    attendeeid: number
    registeredAt?: Date | string
  }

  export type EventattendeeCreateOrConnectWithoutEventInput = {
    where: EventattendeeWhereUniqueInput
    create: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput>
  }

  export type EventattendeeCreateManyEventInputEnvelope = {
    data: EventattendeeCreateManyEventInput | EventattendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutEventInput = {
    update: XOR<VenueUpdateWithoutEventInput, VenueUncheckedUpdateWithoutEventInput>
    create: XOR<VenueCreateWithoutEventInput, VenueUncheckedCreateWithoutEventInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutEventInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutEventInput, VenueUncheckedUpdateWithoutEventInput>
  }

  export type VenueUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type VenueUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    venuename?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type EventattendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventattendeeWhereUniqueInput
    update: XOR<EventattendeeUpdateWithoutEventInput, EventattendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventattendeeCreateWithoutEventInput, EventattendeeUncheckedCreateWithoutEventInput>
  }

  export type EventattendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventattendeeWhereUniqueInput
    data: XOR<EventattendeeUpdateWithoutEventInput, EventattendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventattendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventattendeeScalarWhereInput
    data: XOR<EventattendeeUpdateManyMutationInput, EventattendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type EventattendeeScalarWhereInput = {
    AND?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
    OR?: EventattendeeScalarWhereInput[]
    NOT?: EventattendeeScalarWhereInput | EventattendeeScalarWhereInput[]
    id?: IntFilter<"Eventattendee"> | number
    eventid?: IntFilter<"Eventattendee"> | number
    attendeeid?: IntFilter<"Eventattendee"> | number
    registeredAt?: DateTimeFilter<"Eventattendee"> | Date | string
  }

  export type EventattendeeCreateWithoutAttendeeInput = {
    registeredAt?: Date | string
    event: EventCreateNestedOneWithoutEventattendeeInput
  }

  export type EventattendeeUncheckedCreateWithoutAttendeeInput = {
    id?: number
    eventid: number
    registeredAt?: Date | string
  }

  export type EventattendeeCreateOrConnectWithoutAttendeeInput = {
    where: EventattendeeWhereUniqueInput
    create: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput>
  }

  export type EventattendeeCreateManyAttendeeInputEnvelope = {
    data: EventattendeeCreateManyAttendeeInput | EventattendeeCreateManyAttendeeInput[]
    skipDuplicates?: boolean
  }

  export type EventattendeeUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: EventattendeeWhereUniqueInput
    update: XOR<EventattendeeUpdateWithoutAttendeeInput, EventattendeeUncheckedUpdateWithoutAttendeeInput>
    create: XOR<EventattendeeCreateWithoutAttendeeInput, EventattendeeUncheckedCreateWithoutAttendeeInput>
  }

  export type EventattendeeUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: EventattendeeWhereUniqueInput
    data: XOR<EventattendeeUpdateWithoutAttendeeInput, EventattendeeUncheckedUpdateWithoutAttendeeInput>
  }

  export type EventattendeeUpdateManyWithWhereWithoutAttendeeInput = {
    where: EventattendeeScalarWhereInput
    data: XOR<EventattendeeUpdateManyMutationInput, EventattendeeUncheckedUpdateManyWithoutAttendeeInput>
  }

  export type EventCreateWithoutVenueInput = {
    title: string
    description?: string | null
    data: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Eventattendee?: EventattendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVenueInput = {
    id?: number
    title: string
    description?: string | null
    data: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Eventattendee?: EventattendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVenueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventCreateManyVenueInputEnvelope = {
    data: EventCreateManyVenueInput | EventCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
  }

  export type EventUpdateManyWithWhereWithoutVenueInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutVenueInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    data?: DateTimeFilter<"Event"> | Date | string
    venueid?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventCreateWithoutEventattendeeInput = {
    title: string
    description?: string | null
    data: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    venue: VenueCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventattendeeInput = {
    id?: number
    title: string
    description?: string | null
    data: Date | string
    venueid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutEventattendeeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventattendeeInput, EventUncheckedCreateWithoutEventattendeeInput>
  }

  export type AttendeeCreateWithoutEventattendeeInput = {
    name: string
    email: string
    registerdAt?: Date | string
  }

  export type AttendeeUncheckedCreateWithoutEventattendeeInput = {
    id?: number
    name: string
    email: string
    registerdAt?: Date | string
  }

  export type AttendeeCreateOrConnectWithoutEventattendeeInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutEventattendeeInput, AttendeeUncheckedCreateWithoutEventattendeeInput>
  }

  export type EventUpsertWithoutEventattendeeInput = {
    update: XOR<EventUpdateWithoutEventattendeeInput, EventUncheckedUpdateWithoutEventattendeeInput>
    create: XOR<EventCreateWithoutEventattendeeInput, EventUncheckedCreateWithoutEventattendeeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventattendeeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventattendeeInput, EventUncheckedUpdateWithoutEventattendeeInput>
  }

  export type EventUpdateWithoutEventattendeeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventattendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    venueid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUpsertWithoutEventattendeeInput = {
    update: XOR<AttendeeUpdateWithoutEventattendeeInput, AttendeeUncheckedUpdateWithoutEventattendeeInput>
    create: XOR<AttendeeCreateWithoutEventattendeeInput, AttendeeUncheckedCreateWithoutEventattendeeInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutEventattendeeInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutEventattendeeInput, AttendeeUncheckedUpdateWithoutEventattendeeInput>
  }

  export type AttendeeUpdateWithoutEventattendeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateWithoutEventattendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registerdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeCreateManyEventInput = {
    id?: number
    attendeeid: number
    registeredAt?: Date | string
  }

  export type EventattendeeUpdateWithoutEventInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendee?: AttendeeUpdateOneRequiredWithoutEventattendeeNestedInput
  }

  export type EventattendeeUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendeeid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendeeid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeCreateManyAttendeeInput = {
    id?: number
    eventid: number
    registeredAt?: Date | string
  }

  export type EventattendeeUpdateWithoutAttendeeInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventattendeeNestedInput
  }

  export type EventattendeeUncheckedUpdateWithoutAttendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventattendeeUncheckedUpdateManyWithoutAttendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventid?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyVenueInput = {
    id?: number
    title: string
    description?: string | null
    data: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutVenueInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Eventattendee?: EventattendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Eventattendee?: EventattendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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