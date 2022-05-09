import { pages } from "./Constant";

export function getDirection(value) {
    let direction = "down";
    if (value < 0) {
        direction = "up";
    }

    return direction;
}

export function getNextPage(currentPage) {
    let nextPage = undefined;
    if (pages.indexOf(currentPage) + 1 < pages.length) {
        nextPage = pages.indexOf(currentPage) + 1;
    }

    return nextPage;
}

export function getPrevPage(currentPage) {
    let prevPage = undefined;
    if (pages.indexOf(currentPage) - 1 >= 0) {
        prevPage = pages.indexOf(currentPage) - 1;
    }

    return prevPage;
}