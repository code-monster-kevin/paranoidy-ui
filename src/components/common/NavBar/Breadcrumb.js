import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

function breadcrumb(props) {
  return (
    <div className="container m-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <BreadcrumbItem link="/" name="Home" />
          <BreadcrumbItem link="/" name="Category 1" />
          <BreadcrumbItem link="/" name="Subcategory 1" />
          <BreadcrumbItem link="/" name="Product A" isCurrentPage={true} />
        </ol>
      </nav>
    </div>
  );
}

export default breadcrumb;
