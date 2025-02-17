type Props = {
    title: string;
};

const PageHeader = ({title}: Props) => {
  return (
    <div className='md:py-14'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>
            {title}
        </h1>
    </div>
  );
};

export default PageHeader;