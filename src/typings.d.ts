/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare function ga (a: string, b: string, c: string): any;
declare function ga (a: string, b: string): any;