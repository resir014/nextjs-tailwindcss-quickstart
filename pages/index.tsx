import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LayoutRoot } from '~/components/layout/layout-root';
import { Page } from '~/components/page/page';
import { PageHeader } from '~/components/page/page-header';
import { PageContent } from '~/components/page/page-content';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
  () => import('~/modules/word-salad/rich-text-editor').then(mod => mod.RichTextEditor),
  { ssr: false }
);

const IndexPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <PageHeader pageTitle="Word Salad" />
        <PageContent>
          <RichTextEditor />
        </PageContent>
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;
