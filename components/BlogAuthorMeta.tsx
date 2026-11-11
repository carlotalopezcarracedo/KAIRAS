import React, { type ReactNode } from 'react';

type BlogAuthorMetaProps = {
  children: ReactNode;
};

const BlogAuthorMeta: React.FC<BlogAuthorMetaProps> = ({ children }) => (
  <div className="mb-12 text-xs font-mono text-slate-400">
    <p>{children}</p>
    <p className="mt-2">
      Por{' '}
      <a href="/sobre-carlota/" rel="author" className="text-slate-300 hover:text-cyber-purple transition-colors">
        Carlota López Carracedo
      </a>{' '}
      · Fundadora de KAIRAS
    </p>
  </div>
);

export default BlogAuthorMeta;
