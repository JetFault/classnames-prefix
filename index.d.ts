// Type definitions for classnames-prefix 0.0.2
// Project: https://github.com/jetfault/classnames-prefix
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
//                 Adi Dahiya <https://github.com/adidahiya>
//                 Jason Killian <https://github.com/JKillian>
//                 Sean Kelley <https://github.com/seansfkelley>
//                 Michal Adamczyk <https://github.com/mradamczyk>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Jerry Reptak <https://github.com/jetfault>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// BASED ON https://github.com/DefinitelyTyped/DefinitelyTyped classnames type definitions
type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

// This is the only way I found to break circular references between ClassArray and ClassValue
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
interface ClassArray extends Array<ClassValue> { } // tslint:disable-line no-empty-interface
type ClassNamesFn = (...classes: ClassValue[]) => string;

declare const classNames: ClassNamesFn;

type ClassNamesPrefix = (prefix?: string, regex?: RegExp) => ClassNamesFn;

declare const classNamesPrefix: ClassNamesPrefix;

export = classNamesPrefix;
export as namespace classNamesPrefix;
