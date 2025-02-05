export const ApiEndpoints = {
  auth: {
    login: () => '/api/v1/auth/login',
    register: () => '/api/v1/auth/register',
    signInWithGoogle: () => '/api/v1/auth/google-login',
    updateProfile: () => '/api/v1/auth/update-profile',
    changePassword: () => '/api/v1/auth/change-password',

    whoAmI: () => '/api/v1/auth/who-am-i',

    sendEmailVerificationEmail: () => '/api/v1/auth/send-email-verification-email',
    verifyEmail: () => '/api/v1/auth/verify-email',

    requestPasswordReset: () => '/api/v1/auth/request-password-reset',
    resetPassword: () => '/api/v1/auth/reset-password',

    generateApiKey: () => '/api/v1/auth/api-keys',
    listApiKeys: () => '/api/v1/auth/api-keys',
    revokeApiKey: (id: string) => `/api/v1/auth/api-keys/${id}/revoke`,
    renameApiKey: (id: string) => `/api/v1/auth/api-keys/${id}/rename`,
    deleteApiKey: (id: string) => `/api/v1/auth/api-keys/${id}`,
  },
  gateway: {
    listDevices: () => '/gateway/devices',
    sendSMS: (id: string) => `/gateway/devices/${id}/send-sms`,
    sendBulkSMS: (id: string) => `/gateway/devices/${id}/send-bulk-sms`,
    getReceivedSMS: (id: string) => `/gateway/devices/${id}/get-received-sms`,

    getWebhooks: () => '/webhooks',
    createWebhook: () => '/webhooks',
    updateWebhook: (id: string) => `/webhooks/${id}`,
    getStats: () => '/gateway/stats',
  },
}
