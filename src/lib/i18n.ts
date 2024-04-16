import { createTheme } from '@mui/material';
import { LANGUAGE } from './global';
import { enUS, esES, jaJP, zhCN } from '@mui/material/locale';

export const ui = {
  ja: {
    'config.condition.targetFieldCode.title': '対象フィールド',
    'config.condition.targetFieldCode.description':
      '自動補完を有効にするフィールドを選択してください',
    'config.condition.targetFieldCode.label': '対象フィールド',
    'config.condition.srcAppId.title': '参照するアプリ',
    'config.condition.srcAppId.description': '自動補完の候補として参照するアプリを選択してください',
    'config.condition.srcAppId.label': '参照アプリ',
    'config.condition.srcFieldCode.title': '参照するフィールド',
    'config.condition.srcFieldCode.description':
      '自動補完の候補として参照するフィールドを選択してください',
    'config.condition.srcFieldCode.label': '参照フィールド',
    'config.condition.limit.title': '表示上限',
    'config.condition.limit.description':
      '表示する候補の上限を設定します。参照するデータ件数が多すぎるとパフォーマンスに影響しますが、上限を設定することで解決することがあります。あくまで表示されるデータの上限のため、検索は全てのデータに対して実行されます。0を指定した場合、上限は設定されません。',

    'config.sidebar.tab.label': '設定',
    'config.button.save': '設定を保存',
    'config.button.return': 'プラグイン一覧へ戻る',
    'config.toast.save': '設定を保存しました',
    'config.toast.reset': '設定をリセットしました',
    'config.toast.import': '設定情報をインポートしました',
    'config.toast.export': 'プラグインの設定情報をエクスポートしました',
    'config.error.root':
      'プラグインのHTMLに、ルート要素が存在しません。プラグイン設定をレンダリングするためには、id="settings"の要素が必要です。',
    'config.error.import':
      '設定情報のインポートに失敗しました、ファイルに誤りがないか確認してください',
    'config.error.export':
      'プラグインの設定情報のエクスポートに失敗しました。プラグイン開発者にお問い合わせください。',
    'desktop.dialogtrigger.title': 'プラグインが有効です',
    'desktop.dialogtrigger.content': 'クリックするとイベントの詳細を確認できます',
    'desktop.dialog.title': 'プラグインの設定情報',
  },
  en: {
    'config.condition.targetFieldCode.title': 'Target Field',
    'config.condition.targetFieldCode.description': 'Select the field to enable autocomplete',
    'config.condition.targetFieldCode.label': 'Target Field',
    'config.condition.srcAppId.title': 'Source App',
    'config.condition.srcAppId.description':
      'Select the app to reference for autocomplete suggestions',
    'config.condition.srcAppId.label': 'Source App',
    'config.condition.srcFieldCode.title': 'Source Field',
    'config.condition.srcFieldCode.description':
      'Select the field to reference for autocomplete suggestions',
    'config.condition.srcFieldCode.label': 'Source Field',
    'config.condition.limit.title': 'Display Limit',
    'config.condition.limit.description':
      'Set the limit for displaying suggestions. If the number of data to reference is too large, it may affect performance, but setting a limit can help resolve this. This limit only affects the displayed data, and the search will still be performed on all data. If you specify 0, there will be no limit.',

    'config.sidebar.tab.label': 'Settings',
    'config.button.save': 'Save Settings',
    'config.button.return': 'Return to Plugin List',
    'config.toast.save': 'Settings saved',
    'config.toast.reset': 'Settings reset',
    'config.toast.import': 'Settings imported',
    'config.toast.export': 'Plugin settings exported',
    'config.error.root':
      'The root element does not exist in the plugin HTML. To render the plugin settings, an element with id="settings" is required.',
    'config.error.import': 'Failed to import settings. Please check the file for errors.',
    'config.error.export': 'Failed to export plugin settings. Please contact the plugin developer.',
    'desktop.dialogtrigger.title': 'Plugin is enabled',
    'desktop.dialogtrigger.content': 'Click to view event details',
    'desktop.dialog.title': 'Plugin Settings',
  },
  es: {
    'config.condition.targetFieldCode.title': 'Campo de destino',
    'config.condition.targetFieldCode.description':
      'Seleccione el campo para habilitar el autocompletado',
    'config.condition.targetFieldCode.label': 'Campo de destino',
    'config.condition.srcAppId.title': 'Aplicación de origen',
    'config.condition.srcAppId.description':
      'Seleccione la aplicación de referencia para las sugerencias de autocompletado',
    'config.condition.srcAppId.label': 'Aplicación de origen',
    'config.condition.srcFieldCode.title': 'Campo de origen',
    'config.condition.srcFieldCode.description':
      'Seleccione el campo de referencia para las sugerencias de autocompletado',
    'config.condition.srcFieldCode.label': 'Campo de origen',
    'config.condition.limit.title': 'Límite de visualización',
    'config.condition.limit.description':
      'Establezca el límite para mostrar sugerencias. Si el número de datos a referenciar es demasiado grande, puede afectar el rendimiento, pero establecer un límite puede ayudar a resolver esto. Este límite solo afecta los datos mostrados y la búsqueda se realizará en todos los datos. Si especifica 0, no habrá límite.',

    'config.sidebar.tab.label': 'Configuración',
    'config.button.save': 'Guardar configuración',
    'config.button.return': 'Volver a la lista de plugins',
    'config.toast.save': 'Configuración guardada',
    'config.toast.reset': 'Configuración restablecida',
    'config.toast.import': 'Configuración importada',
    'config.toast.export': 'Configuración del plugin exportada',
    'config.error.root':
      'El elemento raíz no existe en el HTML del plugin. Para renderizar la configuración del plugin, se requiere un elemento con id="settings".',
    'config.error.import':
      'Error al importar la configuración. Por favor, verifique que el archivo no contenga errores.',
    'config.error.export':
      'Error al exportar la configuración del plugin. Por favor, contacte al desarrollador del plugin.',
    'desktop.dialogtrigger.title': 'El plugin está habilitado',
    'desktop.dialogtrigger.content': 'Haz clic para ver los detalles del evento',
    'desktop.dialog.title': 'Configuración del plugin',
  },
  zh: {
    'config.condition.targetFieldCode.title': '目标字段',
    'config.condition.targetFieldCode.description': '请选择要启用自动完成的字段',
    'config.condition.targetFieldCode.label': '目标字段',
    'config.condition.srcAppId.title': '参考应用',
    'config.condition.srcAppId.description': '请选择用于自动完成建议的参考应用',
    'config.condition.srcAppId.label': '参考应用',
    'config.condition.srcFieldCode.title': '参考字段',
    'config.condition.srcFieldCode.description': '请选择用于自动完成建议的参考字段',
    'config.condition.srcFieldCode.label': '参考字段',
    'config.condition.limit.title': '显示限制',
    'config.condition.limit.description':
      '设置显示建议的限制。如果要参考的数据数量过大，可能会影响性能，但设置限制可以解决此问题。此限制仅影响显示的数据，搜索仍将在所有数据上执行。如果指定为0，则没有限制。',

    'config.sidebar.tab.label': '设置',
    'config.button.save': '保存设置',
    'config.button.return': '返回插件列表',
    'config.toast.save': '设置已保存',
    'config.toast.reset': '设置已重置',
    'config.toast.import': '已导入设置',
    'config.toast.export': '已导出插件设置',
    'config.error.root': '插件的HTML中不存在根元素。要渲染插件设置，需要一个id="settings"的元素。',
    'config.error.import': '导入设置失败。请检查文件是否有错误。',
    'config.error.export': '导出插件设置失败。请联系插件开发者。',
    'desktop.dialogtrigger.title': '插件已启用',
    'desktop.dialogtrigger.content': '单击以查看事件详细信息',
    'desktop.dialog.title': '插件设置',
  },
} as const;

export type Language = keyof typeof ui;

export const defaultLang = 'ja' satisfies Language;

/**
 * 指定された言語に対応する翻訳関数を返します。
 * @param lang - 言語のキー
 * @returns 指定された言語に対応する翻訳関数
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    //@ts-ignore
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export const t = useTranslations(LANGUAGE as Language);

export const getMUITheme = () => {
  return createTheme(
    {},
    LANGUAGE === 'en' ? enUS : LANGUAGE === 'zh' ? zhCN : LANGUAGE === 'es' ? esES : jaJP
  );
};
