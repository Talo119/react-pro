import React, { LazyExoticComponent, lazy } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyPage1 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import LazyLayout from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy( () => import(/* webPackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout') );
//const Lazy2 = lazy( () => import(/* webPackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
//const Lazy3 = lazy( () => import(/* webPackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',        
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];