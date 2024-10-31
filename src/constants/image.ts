export const THUMBNAIL_TYPE_QUERY = {
  default: '?type=h&h=400&ttype=jpg',
  profile: '?type=f&w=100&h=100&quality=90&faceopt=true&ttype=jpg',
};

export const IMAGE_BUCKET_URL = 'https://kr.object.ncloudstorage.com/fillbom-bucket/';
export const IMAGE_CDN_URL = 'https://image.fillbom.com/SqBTDUEggs/';

export const DEFAULT_PROFILE_IMAGES = [
  'default_profile_1.png',
  'default_profile_2.png',
  'default_profile_3.png',
  'default_profile_4.png',
  'default_profile_5.png',
  'default_profile_6.png',
  'default_profile_7.png',
  'default_profile_8.png',
  'default_profile_9.png',
  'default_profile_10.png',
].map((path) => IMAGE_BUCKET_URL + path + THUMBNAIL_TYPE_QUERY.profile);
