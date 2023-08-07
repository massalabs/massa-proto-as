// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class EvmGetPubkeyFromSignatureRequest {
  static encode(
    message: EvmGetPubkeyFromSignatureRequest,
    writer: Writer
  ): void {
    writer.uint32(10);
    writer.bytes(message.hash);

    writer.uint32(18);
    writer.bytes(message.sig);
  }

  static decode(reader: Reader, length: i32): EvmGetPubkeyFromSignatureRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvmGetPubkeyFromSignatureRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.sig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;
  sig: Uint8Array;

  constructor(
    hash: Uint8Array = new Uint8Array(0),
    sig: Uint8Array = new Uint8Array(0)
  ) {
    this.hash = hash;
    this.sig = sig;
  }
}

export function encodeEvmGetPubkeyFromSignatureRequest(
  message: EvmGetPubkeyFromSignatureRequest
): Uint8Array {
  return Protobuf.encode(message, EvmGetPubkeyFromSignatureRequest.encode);
}

export function decodeEvmGetPubkeyFromSignatureRequest(
  buffer: Uint8Array
): EvmGetPubkeyFromSignatureRequest {
  return Protobuf.decode<EvmGetPubkeyFromSignatureRequest>(
    buffer,
    EvmGetPubkeyFromSignatureRequest.decode
  );
}