import type { Component } from "svelte";
import NotFound from "~/pages/error/NotFound.svelte";
import WorkInProgress from "./pages/error/WorkInProgress.svelte";

type RouteAddress = {
    comp: Component,
    auth: boolean
};

const value: Record<string, RouteAddress> = {
    '/error/wip': { "comp": WorkInProgress, "auth": true },
    '/*': { "comp": NotFound, "auth": false },
};

function getRoutes() {
    let tmp: Record<string, Component> = {};
    Object.keys(value).forEach(e => {
        tmp[e] = value[e].comp;
    })
    return tmp;
};

function getAuthRoutes() {
    let tmp: Record<string, boolean> = {};
    Object.keys(value).forEach(e => {
        tmp[e] = value[e].auth;
    })
    return tmp;
};

export const routes = getRoutes();
export const authRoutes = getAuthRoutes();