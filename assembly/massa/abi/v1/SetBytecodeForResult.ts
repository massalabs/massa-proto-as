// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class SetBytecodeForResult {
  static encode(message: SetBytecodeForResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): SetBytecodeForResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetBytecodeForResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeSetBytecodeForResult(
  message: SetBytecodeForResult
): Uint8Array {
  return Protobuf.encode(message, SetBytecodeForResult.encode);
}

export function decodeSetBytecodeForResult(
  buffer: Uint8Array
): SetBytecodeForResult {
  return Protobuf.decode<SetBytecodeForResult>(
    buffer,
    SetBytecodeForResult.decode
  );
}
