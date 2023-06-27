// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeSig } from "..\\..\\model\\v1\\NativeSig";

export class CompareNativeSigRequest {
  static encode(message: CompareNativeSigRequest, writer: Writer): void {
    const left = message.left;
    if (left !== null) {
      writer.uint32(10);
      writer.fork();
      NativeSig.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(18);
      writer.fork();
      NativeSig.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativeSigRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeSigRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = NativeSig.decode(reader, reader.uint32());
          break;

        case 2:
          message.right = NativeSig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: NativeSig | null;
  right: NativeSig | null;

  constructor(left: NativeSig | null = null, right: NativeSig | null = null) {
    this.left = left;
    this.right = right;
  }
}

export function encodeCompareNativeSigRequest(
  message: CompareNativeSigRequest
): Uint8Array {
  return Protobuf.encode(message, CompareNativeSigRequest.encode);
}

export function decodeCompareNativeSigRequest(
  buffer: Uint8Array
): CompareNativeSigRequest {
  return Protobuf.decode<CompareNativeSigRequest>(
    buffer,
    CompareNativeSigRequest.decode
  );
}
