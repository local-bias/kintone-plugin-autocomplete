declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV1;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1; // | ConfigV2 | ...;

  type ConfigV1 = {
    version: 1;
    conditions: {
      cacheId: string;
      targetFieldCode: string;
      srcAppId: string;
      srcFieldCode: string;
    }[];
  };

  type AutocompleteOption = {
    label: string;
    value: string;
    quickSearch: string;
  };

  type CacheData = CacheDataV1;

  type CacheDataV1 = {
    version: 1;
  } & Record<string, string[]>;
}
