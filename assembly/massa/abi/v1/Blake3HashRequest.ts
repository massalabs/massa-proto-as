// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Blake3HashRequest {
  static encode(message: Blake3HashRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): Blake3HashRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Blake3HashRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function encodeBlake3HashRequest(
  message: Blake3HashRequest
): Uint8Array {
  return Protobuf.encode(message, Blake3HashRequest.encode);
}

export function decodeBlake3HashRequest(buffer: Uint8Array): Blake3HashRequest {
  return Protobuf.decode<Blake3HashRequest>(buffer, Blake3HashRequest.decode);
}
