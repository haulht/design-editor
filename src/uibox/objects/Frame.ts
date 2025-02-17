import { fabric } from 'fabric'

export class FrameObject extends fabric.Rect {
  static type = 'Frame'
  initialize(options: FrameOptions) {
    super.initialize({
      ...options,
      selectable: false,
      hasControls: false,
      lockMovementY: true,
      lockMovementX: true,
      strokeWidth: 0,
      padding: 0,
    })
    return this
  }

  toObject(propertiesToInclude: string[] = []) {
    return super.toObject(propertiesToInclude)
  }
  toJSON(propertiesToInclude: string[] = []) {
    return super.toJSON(propertiesToInclude)
  }
  static fromObject(options: FrameOptions) {
    return new fabric.Frame(options)
  }
}

fabric.Frame = fabric.util.createClass(FrameObject, {
  type: FrameObject.type,
})
fabric.Frame.fromObject = FrameObject.fromObject

export interface FrameOptions extends fabric.IRectOptions {
  id: string
  name: string
  description?: string
}

declare module 'fabric' {
  namespace fabric {
    class Frame extends FrameObject {
      constructor(options: FrameOptions)
    }
  }
}
