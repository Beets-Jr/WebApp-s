import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  "type": "service_account",
  "project_id": "baserepo-84fee",
  "private_key_id": "b15d2e140a8d781b2713499cef41a409e62a9d91",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6UBnuuuQ1pYHb\nZkZVg4dsb8di8hX2zsbzoNcT9UrXjd7UgC2hRN0jIIxdM/0EPqrSWoaSLwzSPVWI\n2NLGY40IM6utQpqjBx3ctwveIDdSGPekHBefImG1Uyjoxkyvi7duSRRDJC9cZZRI\nhUTMq/hNZMy3V8L/f6HotPa/FggNz5OVx7cQlj73Y1jObWTVXIq2vKGY1hcGZNyh\nic/caEomD5LVawFGp4rkOZAGwQx8h4PbQSvzfdR45KZaaGm9DARjZW53h8nLGlyi\nPx5fLqiwlRKQlGqyZnxOU9v3xdblrDgczTcxABGzUpjEFrWTBsHJwjvj6EozHH9c\npGLBTvD/AgMBAAECggEAOqgnUfLDEGS4GnP7psaPJ0OV2X/wDFETb/ZuYFk0o+KF\nig+EziYZHQsNRfatLN3x9+IKRhHMDpDC0h+5VD5ZU4C5BwZWGweNjkSO1vL7l7xG\nkwNJKI+xhV3WHlr4H7h0GqOlXnIQ+xz7700N2QY3WV5n2T0nJjtvpQz8NjLgfEAZ\nHS/4JPZ8wbYny1efiDyvNTwpwZmnJUJLmTcRR/SYCumn6BeVQel70aJ3DaepbPFN\netyR71ovQ70FNmkG+oLwuWTHsQ00SnCswZ7Heds6716Jf9RABMVpZvnXE+HzRMYk\nVsXSshj6hsDnWRZJGbREAFR6+uyut5QcMcQJ3/UVKQKBgQDpSDiseQkFi+I8Mi+h\neZUoA+lLAH3GoaUVoJl118TrvNBREfcThZliXkS1PDLpF5xW5WNJPKpmRcOL9xfb\nvmak27bYXYaiDhRji4XdfAcgDq2JX1asPq+zG0Wb5mJSLTFOUk76jyIvpOrNQb8t\nMd++oqL0hqC9l3QSMfEvuCl6dQKBgQDMdO0VrC1bQ71xNacHPZoBqXdAVt3VDbgD\nHFnLkcwzhnH67uwG8n0+iEkXfH3yGtmzbcU1wdrBap+ogiGmdIqO3BhVMEoRmIJR\nDYxJxoWiImnZ+/R0s+RE27e1aEOt7cCEUAsahozEym7Q9MEXf3in86NmfUHfA57z\nN4a5PuIHIwKBgQDHutUDHjHSNN0DKvjK6N0CwK6KT6ZgXV+Jb9JUKePo7eTxtE71\nwOn9Zbav8RWpqlRptcZXGwDNxadR+8HKm28ocRFQmGq/7wwX2opHgnxbPxXnSuBb\nYuRtlcj4XL0LnLPdWe1S6x+a6Tk7ebIkENJ/VqHseCPBj52KQoY8lBG3TQKBgQDH\nfxPTANSk550SuOJIm2AJXR0CB4Ceoas6RdCMZK/WWsoeqkBdqwBwIrUHGK8fq/le\nLa6u/H+CGJK+7nL9I1wLd1C61sp/DsuhYNHRLsc349JbI5Bsyxbh5W4EsT7QmFsv\n/5ZGBKGYZ1nnw9ohHn1Ri9aVa4T5oWPYOAbZ/DS59wKBgQDLG8Wvti89C6sQ8yg4\n/A5kX0k55lyjFDEE2pdnp6h/LgYh61ZmuRqb9S+yRM7Xb2LwaY4QvUWEl0qJsNnf\nSgbn7DjvbUnX5chfUncRY+9FcfJzmHz37kEb+vVAnViR4mYKPU/VU4uJyc0xGtIm\nM6zsYkoqAgs8Hg/xoYoXy8YueA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@baserepo-84fee.iam.gserviceaccount.com",
  "client_id": "113569954911470687893",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40baserepo-84fee.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
  });
}

export const db = getFirestore();
export const auth = admin.auth();