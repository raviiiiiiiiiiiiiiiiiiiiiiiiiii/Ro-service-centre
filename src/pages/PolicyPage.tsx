import React from 'react';

export interface PolicyData {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export default function PolicyPage({ data }: { data: PolicyData }) {
  return (
    <div className="pt-spacing-2xl pb-spacing-3xl bg-surface">
      <div className="max-w-3xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-spacing-xs">
          {data.title}
        </h1>
        <p className="text-on-surface-variant font-label-md mb-spacing-xl">
          Last Updated: {data.lastUpdated}
        </p>
        <div className="max-w-none space-y-spacing-md [&>h2]:font-headline-md [&>h2]:text-on-surface [&>h2]:mt-spacing-xl [&>h2]:mb-spacing-sm [&>p]:text-on-surface-variant [&>p]:font-body-md [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-spacing-lg [&>ul]:space-y-spacing-xs [&>ul]:text-on-surface-variant [&>ul]:font-body-md [&>a]:text-primary [&>a]:underline">
          {data.content}
        </div>
      </div>
    </div>
  );
}
