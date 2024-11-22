import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  slug: string;
}

export default function CategoryCard({ icon, title, count, slug }: CategoryCardProps) {
  return (
    <Link to={`/categories/${slug}`}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center group">
        <div className="inline-block p-4 bg-purple-100 rounded-full text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{count} events</p>
      </div>
    </Link>
  );
}