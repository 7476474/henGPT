import qs from 'query-string';
import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://www.chat.ai.liusi.cloudns.org/';
export const OFFICIAL_SITE = 'https://chenhen.rf.gd/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = urlJoin(GITHUB, 'issues/new');
export const CHANGELOG = urlJoin(GITHUB, '');
export const DOCKER_IMAGE = '';

export const DOCUMENTS = urlJoin(OFFICIAL_SITE, '');
export const USAGE_DOCUMENTS = urlJoin(DOCUMENTS, '');
export const SELF_HOSTING_DOCUMENTS = urlJoin(DOCUMENTS, '');

export const WIKI = urlJoin(GITHUB, 'wiki');
export const WIKI_PLUGIN_GUIDE = urlJoin(USAGE_DOCUMENTS, '');
export const MANUAL_UPGRADE_URL = urlJoin(SELF_HOSTING_DOCUMENTS, '');

export const BLOG = urlJoin(OFFICIAL_SITE, 'blog');

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = '';
export const PRIVACY_URL = urlJoin(OFFICIAL_SITE, '');
export const TERMS_URL = urlJoin(OFFICIAL_SITE, '');

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL =
  '';

export const AGENTS_INDEX_GITHUB = 'https://www.chenhen.rf.gd/forums/';
export const AGENTS_INDEX_GITHUB_ISSUE = 'https://www.chenhen.rf.gd/posts-edit';

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  qs.stringifyUrl({
    query: mobile ? { session: id, showMobileWorkspace: mobile } : { session: id },
    url: '/chat',
  });

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);

export const LOBE_URL_IMPORT_NAME = 'settings';
export const EMAIL_SUPPORT = 'cxl@liusi.cloudns.org';
export const EMAIL_BUSINESS = 'hanfish666@qq.com';

export const MEDIDUM = 'https://space.bilibili.com/1197710906';
export const X = 'https://x.com/chenhen468033';
export const RELEASES_URL = urlJoin(GITHUB, 'releases');
