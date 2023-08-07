// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class LocalCallResponse {
  static encode(message: LocalCallResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.returnData);
  }

  static decode(reader: Reader, length: i32): LocalCallResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LocalCallResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  returnData: Uint8Array;

  constructor(returnData: Uint8Array = new Uint8Array(0)) {
    this.returnData = returnData;
  }
}

export function encodeLocalCallResponse(
  message: LocalCallResponse
): Uint8Array {
  return Protobuf.encode(message, LocalCallResponse.encode);
}

export function decodeLocalCallResponse(buffer: Uint8Array): LocalCallResponse {
  return Protobuf.decode<LocalCallResponse>(buffer, LocalCallResponse.decode);
}