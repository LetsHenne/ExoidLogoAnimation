import {Img, makeScene2D, Code, Node, Line,Txt, Rect, Layout, Polygon, Circle, Ray} from '@motion-canvas/2d';
import {createRef, waitFor, all, tween, map, delay, Color, chain} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  const rect0 = createRef<Rect>();

  const rect1 = createRef<Rect>();
  const rect2 = createRef<Rect>();
  const rect3 = createRef<Rect>();
  const rect4 = createRef<Rect>();
  const rect5 = createRef<Rect>();
  const rect6 = createRef<Rect>();

  //view.add(<Img src={"/img/logo_transparent.png"}></Img>);
  view.add(<Rect ref={rect0} rotation={45}>
    <Rect ref={rect1} fill={'white'} width={110} height={0} position={[-272,220]}></Rect>
    <Rect ref={rect2} fill={'white'} width={0} height={110} position={[-217,-272]}></Rect>
    <Rect ref={rect3} fill={'white'} width={110} height={0} position={[275,-327]}></Rect>
    <Rect ref={rect4} fill={'white'} width={0} height={110} position={[220, 275]}></Rect>
    <Rect ref={rect5} fill={'white'} start={0.5} rotation={0} end={0.5} width={110} height={110} position={[-54,56]}></Rect>
    <Rect ref={rect6} fill={'white' }start={0.5} rotation={0} end={0.5} width={110} height={110} position={[56, -54]}></Rect>
  </Rect>);
  // view.add(<Rect ref={rect1} fill={'white'} width={110} height={0} position={[-272,220]}></Rect>); //left
  // view.add(<Rect ref={rect2} fill={'white'} width={0} height={110} position={[-217,-272]}></Rect>); //lefttop

  // view.add(<Rect ref={rect3} fill={'white'} width={110} height={0} position={[275,-327]}></Rect>); //right
  // view.add(<Rect ref={rect4} fill={'white'} width={0} height={110} position={[220, 275]}></Rect>); //rightbot

  // view.add(<Rect ref={rect5} fill={'white'} start={0.5} rotation={0} end={0.5} width={110} height={110} position={[-54,56]}></Rect>); //centerbot
  // view.add(<Rect ref={rect6} fill={'white' }start={0.5} rotation={0} end={0.5} width={110} height={110} position={[56, -54]}></Rect>); //centertop

  yield rect1().height(547,0.7);
  yield rect1().bottom([-272,220],0.7);

  yield rect3().height(657,0.7);
  yield rect3().top([275,-327],0.7);

  yield* waitFor(0.6);

  yield rect2().width(328,0.5);
  yield rect2().left([-217,-272],0.5);

  yield rect4().width(328,0.5);
  yield rect4().right([220, 275],0.5);

  yield* waitFor(0.6);

  yield rect5().start(0.15, 0.3);
  yield rect5().end(0.85, 0.3);
  yield rect6().start(0.15, 0.3);
  yield rect6().end(0.85, 0.3);
  yield* waitFor(0.5);

  yield rect5().start(0.5, 0.5);
  yield rect5().end(0.5, 0.5);
  yield rect6().start(0.5, 0.5);
  yield rect6().end(0.5, 0.5);

  yield* waitFor(0.5);

  yield rect5().start(0, 0.5);
  yield rect5().end(1, 0.5);
  yield rect6().start(0, 0.5);
  yield rect6().end(1, 0.5);

  yield* waitFor(0.75);

  yield* rect0().rotation(0, 1)

  yield* waitFor(2);
});