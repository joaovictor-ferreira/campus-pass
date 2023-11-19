import Link from 'next/link';

const items = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Entretenimento',
    link: '/eventos/entretenimento',
  },
  {
    id: 3,
    name: 'Educacional',
    link: '/eventos/educacional',
  },

  {
    id: 4,
    name: 'Contato',
    link: '/contato',
  },
];

export const getItems = () => {
  return items.map(item => (
    <Link key={item.id} href={item.link}>
      {item.name}
    </Link>
  ));
};
