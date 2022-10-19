const db = uniCloud.database()
const dbCmd = db.command
const userCollectionName = 'uni-id-users'
const userCollection = db.collection(userCollectionName)
const verifyCollectionName = 'opendb-verify-codes'
const verifyCollection = db.collection(verifyCollectionName)
const deviceCollectionName = 'uni-id-device'
const deviceCollection = db.collection(deviceCollectionName)

const USER_IDENTIFIER = {
  username: 'username',
  mobile: 'mobile',
  email: 'email',
  wx_unionid: 'wechat-account',
  'wx_openid.app': 'wechat-account',
  'wx_openid.mp': 'wechat-account',
  'wx_openid.h5': 'wechat-account',
  'wx_openid.web': 'wechat-account',
  qq_unionid: 'qq-account',
  'qq_openid.app': 'qq-account',
  'qq_openid.mp': 'qq-account',
  ali_openid: 'alipay-account',
  apple_openid: 'alipay-account'
}

const USER_STATUS = {
  NORMAL: 0,
  BANNED: 1,
  AUDITING: 2,
  AUDIT_FAILED: 3,
  CLOSED: 4
}

const CAPTCHA_SCENE = {
  REGISTER: 'register',
  LOGIN_BY_PWD: 'login-by-pwd',
  LOGIN_BY_SMS: 'login-by-sms',
  RESET_PWD_BY_SMS: 'reset-pwd-by-sms',
  RESET_PWD_BY_EMAIL: 'reset-pwd-by-email',
  SEND_SMS_CODE: 'send-sms-code',
  SEND_EMAIL_CODE: 'send-email-code',
  BIND_MOBILE_BY_SMS: 'bind-mobile-by-sms'
}

const LOG_TYPE = {
  LOGOUT: 'logout',
  LOGIN: 'login',
  REGISTER: 'register',
  RESET_PWD_BY_SMS: 'reset-pwd',
  RESET_PWD_BY_EMAIL: 'reset-pwd',
  BIND_MOBILE: 'bind-mobile',
  BIND_WEIXIN: 'bind-weixin',
  BIND_QQ: 'bind-qq',
  BIND_APPLE: 'bind-apple',
  BIND_ALIPAY: 'bind-alipay',
  UNBIND_WEIXIN: 'unbind-weixin',
  UNBIND_QQ: 'unbind-qq',
  UNBIND_ALIPAY: 'unbind-alipay',
  UNBIND_APPLE: 'unbind-apple'
}

const SMS_SCENE = {
  LOGIN_BY_SMS: 'login-by-sms',
  RESET_PWD_BY_SMS: 'reset-pwd-by-sms',
  BIND_MOBILE_BY_SMS: 'bind-mobile-by-sms'
}

const EMAIL_SCENE = {
  REGISTER: 'register',
  LOGIN_BY_EMAIL: 'login-by-email',
  RESET_PWD_BY_EMAIL: 'reset-pwd-by-email',
  BIND_EMAIL: 'bind-email'
}

module.exports = {
  db,
  dbCmd,
  userCollection,
  verifyCollection,
  deviceCollection,
  USER_IDENTIFIER,
  USER_STATUS,
  CAPTCHA_SCENE,
  LOG_TYPE,
  SMS_SCENE,
  EMAIL_SCENE
}
