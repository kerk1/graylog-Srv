/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
import * as React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import DocsHelper from 'util/DocsHelper';

type Props = {
  page: string;
  text: ReactNode;
  title?: string;
}

const Link = styled.a`
  white-space: nowrap;
  font-size: 14px;
  color: inherit;
  font-weight: 300;
`;

const DocumentationLink = ({ page, title = '', text }: Props) => {
  return (
    <Link href={DocsHelper.toString(page)} title={title} target="_blank" rel="noreferrer">
      {text}
    </Link>
  );
};

DocumentationLink.defaultProps = {
  title: '',
};

export default DocumentationLink;
