// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class DeleteDataRequest {
  static encode(message: DeleteDataRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);
  }

  static decode(reader: Reader, length: i32): DeleteDataRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DeleteDataRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;

  constructor(key: Uint8Array = new Uint8Array(0)) {
    this.key = key;
  }
}

export function encodeDeleteDataRequest(
  message: DeleteDataRequest
): Uint8Array {
  return Protobuf.encode(message, DeleteDataRequest.encode);
}

export function decodeDeleteDataRequest(buffer: Uint8Array): DeleteDataRequest {
  return Protobuf.decode<DeleteDataRequest>(buffer, DeleteDataRequest.decode);
}