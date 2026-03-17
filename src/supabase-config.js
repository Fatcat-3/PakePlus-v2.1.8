// Supabase 配置 - 全局配置对象，可在所有HTML文件中使用
const SUPABASE_CONFIG = {
    URL: 'https://sbp-4a5uetjh6ui4nmyd.supabase.opentrust.net',
    KEY: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYW5vbiIsInJlZiI6InNicC00YTV1ZXRqaDZ1aTRubXlkIiwiaXNzIjoic3VwYWJhc2UiLCJpYXQiOjE3NTk5NzM3MzMsImV4cCI6MjA3NTU0OTczM30.Bc3ATAyIAmSgMuO9M1WIh8FvztDuCLlwE-q_IJ11bp0'
};

// 验证配置
if (!SUPABASE_CONFIG.URL || SUPABASE_CONFIG.URL.includes('YOUR_SUPABASE_URL')) {
    console.error('错误: 请配置正确的 Supabase URL');
}

if (!SUPABASE_CONFIG.KEY || SUPABASE_CONFIG.KEY.includes('YOUR_SUPABASE_KEY')) {
    console.error('错误: 请配置正确的 Supabase Key');
}

// 创建全局变量，方便HTML文件直接使用
window.SUPABASE_CONFIG = SUPABASE_CONFIG;