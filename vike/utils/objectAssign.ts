export { objectAssign }

// Same as Object.assign() but:
//  - With type inference
//  - Preserves property descriptors, which we need for preserving the getters added by getPageContextUrlComputed()
function objectAssign<Obj extends object, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  if (objAddendum) {
    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(objAddendum))
  }
}
