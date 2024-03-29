// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Int32Value {
  static encode(message: Int32Value, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.value);
  }

  static decode(reader: Reader, length: i32): Int32Value {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Int32Value();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: i32;

  constructor(value: i32 = 0) {
    this.value = value;
  }
}

export function encodeInt32Value(message: Int32Value): Uint8Array {
  return Protobuf.encode(message, Int32Value.encode);
}

export function decodeInt32Value(buffer: Uint8Array): Int32Value {
  return Protobuf.decode<Int32Value>(buffer, Int32Value.decode);
}
