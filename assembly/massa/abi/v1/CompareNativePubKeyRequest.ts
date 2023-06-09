// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativePubKey } from "../../model/v1/NativePubKey";

export class CompareNativePubKeyRequest {
  static encode(message: CompareNativePubKeyRequest, writer: Writer): void {
    const left = message.left;
    if (left !== null) {
      writer.uint32(10);
      writer.fork();
      NativePubKey.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(18);
      writer.fork();
      NativePubKey.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativePubKeyRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativePubKeyRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = NativePubKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.right = NativePubKey.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: NativePubKey | null;
  right: NativePubKey | null;

  constructor(
    left: NativePubKey | null = null,
    right: NativePubKey | null = null
  ) {
    this.left = left;
    this.right = right;
  }
}

export function encodeCompareNativePubKeyRequest(
  message: CompareNativePubKeyRequest
): Uint8Array {
  return Protobuf.encode(message, CompareNativePubKeyRequest.encode);
}

export function decodeCompareNativePubKeyRequest(
  buffer: Uint8Array
): CompareNativePubKeyRequest {
  return Protobuf.decode<CompareNativePubKeyRequest>(
    buffer,
    CompareNativePubKeyRequest.decode
  );
}