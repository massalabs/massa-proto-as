// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeSig } from "../../model/v1/NativeSig";

export class NativeSigToStringRequest {
  static encode(message: NativeSigToStringRequest, writer: Writer): void {
    const toConvert = message.toConvert;
    if (toConvert !== null) {
      writer.uint32(10);
      writer.fork();
      NativeSig.encode(toConvert, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeSigToStringRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeSigToStringRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toConvert = NativeSig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toConvert: NativeSig | null;

  constructor(toConvert: NativeSig | null = null) {
    this.toConvert = toConvert;
  }
}

export function encodeNativeSigToStringRequest(
  message: NativeSigToStringRequest
): Uint8Array {
  return Protobuf.encode(message, NativeSigToStringRequest.encode);
}

export function decodeNativeSigToStringRequest(
  buffer: Uint8Array
): NativeSigToStringRequest {
  return Protobuf.decode<NativeSigToStringRequest>(
    buffer,
    NativeSigToStringRequest.decode
  );
}