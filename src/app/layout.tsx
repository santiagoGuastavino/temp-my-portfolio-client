import Navbar from '@/components/Navbar';
import '../styles/_globals.scss';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Santiago Guastavino',
  description:
    'Santiago Guastavino Portfolio App Application. Software Engineer, Software Developer, Full Stack Web Developer, Back-end, Back End, Front-end, Front end. Typescript, Javascript, Java, Node.js, Nest.js, Express.js, React.js, Next.js, React Native, SQL, NoSQL, MySQL, PostgreSQL, MongoDB, Firebase Firestore, Docker, Git, GitHub, LinkedIn, Agile Methodologies, Scrum, Kanban, HTML, CSS, Tailwind CSS, Sass.',
  icons: {
    icon: 'icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
