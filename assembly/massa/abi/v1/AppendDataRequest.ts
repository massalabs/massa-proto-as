// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class AppendDataRequest {
  static encode(message: AppendDataRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    writer.uint32(18);
    writer.bytes(message.value);
  }

  static decode(reader: Reader, length: i32): AppendDataRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AppendDataRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  value: Uint8Array;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0)
  ) {
    this.key = key;
    this.value = value;
  }
}

export function encodeAppendDataRequest(
  message: AppendDataRequest
): Uint8Array {
  return Protobuf.encode(message, AppendDataRequest.encode);
}

export function decodeAppendDataRequest(buffer: Uint8Array): AppendDataRequest {
  return Protobuf.decode<AppendDataRequest>(buffer, AppendDataRequest.decode);
}
