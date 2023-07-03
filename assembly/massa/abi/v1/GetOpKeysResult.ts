// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetOpKeysResult {
  static encode(message: GetOpKeysResult, writer: Writer): void {
    const keys = message.keys;
    if (keys.length !== 0) {
      for (let i: i32 = 0; i < keys.length; ++i) {
        writer.uint32(10);
        writer.bytes(keys[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): GetOpKeysResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetOpKeysResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  keys: Array<Uint8Array>;

  constructor(keys: Array<Uint8Array> = []) {
    this.keys = keys;
  }
}

export function encodeGetOpKeysResult(message: GetOpKeysResult): Uint8Array {
  return Protobuf.encode(message, GetOpKeysResult.encode);
}

export function decodeGetOpKeysResult(buffer: Uint8Array): GetOpKeysResult {
  return Protobuf.decode<GetOpKeysResult>(buffer, GetOpKeysResult.decode);
}
