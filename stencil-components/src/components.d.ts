/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DepTable {
    }
    interface NavList {
    }
    interface StatButton {
    }
}
declare global {
    interface HTMLDepTableElement extends Components.DepTable, HTMLStencilElement {
    }
    var HTMLDepTableElement: {
        prototype: HTMLDepTableElement;
        new (): HTMLDepTableElement;
    };
    interface HTMLNavListElement extends Components.NavList, HTMLStencilElement {
    }
    var HTMLNavListElement: {
        prototype: HTMLNavListElement;
        new (): HTMLNavListElement;
    };
    interface HTMLStatButtonElement extends Components.StatButton, HTMLStencilElement {
    }
    var HTMLStatButtonElement: {
        prototype: HTMLStatButtonElement;
        new (): HTMLStatButtonElement;
    };
    interface HTMLElementTagNameMap {
        "dep-table": HTMLDepTableElement;
        "nav-list": HTMLNavListElement;
        "stat-button": HTMLStatButtonElement;
    }
}
declare namespace LocalJSX {
    interface DepTable {
    }
    interface NavList {
    }
    interface StatButton {
    }
    interface IntrinsicElements {
        "dep-table": DepTable;
        "nav-list": NavList;
        "stat-button": StatButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dep-table": LocalJSX.DepTable & JSXBase.HTMLAttributes<HTMLDepTableElement>;
            "nav-list": LocalJSX.NavList & JSXBase.HTMLAttributes<HTMLNavListElement>;
            "stat-button": LocalJSX.StatButton & JSXBase.HTMLAttributes<HTMLStatButtonElement>;
        }
    }
}
