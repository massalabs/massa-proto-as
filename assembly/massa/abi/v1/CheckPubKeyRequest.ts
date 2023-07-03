// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CheckPubKeyRequest {
  static encode(message: CheckPubKeyRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.toCheck);
  }

  static decode(reader: Reader, length: i32): CheckPubKeyRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckPubKeyRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toCheck = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toCheck: string;

  constructor(toCheck: string = "") {
    this.toCheck = toCheck;
  }
}

export function encodeCheckPubKeyRequest(
  message: CheckPubKeyRequest
): Uint8Array {
  return Protobuf.encode(message, CheckPubKeyRequest.encode);
}

export function decodeCheckPubKeyRequest(
  buffer: Uint8Array
): CheckPubKeyRequest {
  return Protobuf.decode<CheckPubKeyRequest>(buffer, CheckPubKeyRequest.decode);
}
