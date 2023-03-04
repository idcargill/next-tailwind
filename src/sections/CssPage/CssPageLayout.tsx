import React from 'react';
// @refresh reset
interface StyleProps {
  children?: React.ReactNode;
  style?: string;
}

const Sample = ({ style }:StyleProps) => (
  <div className={`h-8 w-8 bg-purple-700 m-1 ${style}`}></div>
);

const PageContiner = ({ children }: StyleProps) => (
  <div className="container m-auto border-2 border-indigo-600
  shadow-lg shadow-purple-900 p-2 rounded">
    {children}
  </div>
);

const Row = ({ children }: StyleProps) => (
  <div className="flex">
    {children}
  </div>
);


const CssPageLayout = () => (
  <>
  <PageContiner>
    <div className="border-2 border-indigo-600">
    <h3 className="text-center">Page Container</h3>
    <p>container margin auto</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim corporis voluptatum
      error doloribus,
      unde, harum repellendus itaque totam repudiandae deleniti pariatur
      consequatur mollitia laboriosam nihil! Obcaecati fuga cumque qui!</p>
    </div>
  </PageContiner>

  <PageContiner>
    <h3 className="text-center">Flex</h3>
    1 basic Flex
    <div className=" border border-purple-900">
      <Row>
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
      </Row>
    </div>

    2 justify-end basis
    <div className="flex justify-end border border-purple-900">
      <Sample style="basis-1/2"/>
      <Sample style="basis-1/2"/>
      <Sample style="basis-2"/>
      <Sample style="basis-5"/>
    </div>
    3 items-center
    <div className="flex items-center border border-purple-900">
      <Sample style="basis-1/2 h-10" />
      <Sample style="basis-1/4 h-36" />
      <Sample style="basis-1/4 h-5" />
    </div>
    4 grow
    <div className="flex items-start border border-purple-900">
      <Sample style="grow" />
      <Sample style="grow" />
      <Sample style="grow" />
    </div>
    <h3 className="text-lg font-bold">Grid: grid grid-cols-2 lg:grid-cols-4</h3>
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
      <Sample />
    </div>

    Grid rows and columns
    <div className="grid grid-cols-5 grid-rows-4 gap-3">
      <Sample style="h-full w-full col-span-2 row-start-1 row-span-3"/>
      <Sample style="h-20 w-full col-start-4 row-start-1"/>
      <Sample style="h-20 w-full col-start-4 row-start-2"/>
    </div>

    Mouse Events - Box Shadow
    <div className="bg-purple-200 shadow-lg shadow-purple-900">
      <Sample style="hover:cursor-pointer"/>
      <Sample style="hover:cursor-not-allowed"/>
      <Sample style="hover:cursor-help"/>
    </div>

    <div className="text-center">Transition</div>
    <div className="flex justify-center">
      <Sample
        style="transition ease-in-out
        hover:transition-all
        hover:scale-150
        hover:bg-red-800
        hover:duration-1000
        hover:scale-y-50
        duration-1000"
      />
      <Sample
        style="transition ease-in-out
        hover:transition-all
        hover:scale-150
        hover:bg-red-800
        hover:duration-1000
        hover:relative
        hover:bottom-5
        duration-1000"
      />
      <Sample
        style="transition ease-in-out
        hover:transition-all
        hover:scale-150
        hover:bg-red-800
        hover:duration-1000
        duration-1000"
      />
    </div>


    <div className="w-full h-10 bg-gray-900 mb-5">
      <p className="text-center text-white">Footer</p>
    </div>
  </PageContiner>

  </>
);

export default CssPageLayout;
