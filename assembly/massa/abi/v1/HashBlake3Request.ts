// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class HashBlake3Request {
  static encode(message: HashBlake3Request, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): HashBlake3Request {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HashBlake3Request();

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

export function encodeHashBlake3Request(
  message: HashBlake3Request
): Uint8Array {
  return Protobuf.encode(message, HashBlake3Request.encode);
}

export function decodeHashBlake3Request(buffer: Uint8Array): HashBlake3Request {
  return Protobuf.decode<HashBlake3Request>(buffer, HashBlake3Request.decode);
}
