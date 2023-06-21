// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativePubKey } from "../../model/v1/NativePubKey";

export class NativeAddressFromNativePubKeyRequest {
  static encode(
    message: NativeAddressFromNativePubKeyRequest,
    writer: Writer
  ): void {
    const pubKey = message.pubKey;
    if (pubKey !== null) {
      writer.uint32(10);
      writer.fork();
      NativePubKey.encode(pubKey, writer);
      writer.ldelim();
    }
  }

  static decode(
    reader: Reader,
    length: i32
  ): NativeAddressFromNativePubKeyRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAddressFromNativePubKeyRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = NativePubKey.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pubKey: NativePubKey | null;

  constructor(pubKey: NativePubKey | null = null) {
    this.pubKey = pubKey;
  }
}

export function encodeNativeAddressFromNativePubKeyRequest(
  message: NativeAddressFromNativePubKeyRequest
): Uint8Array {
  return Protobuf.encode(message, NativeAddressFromNativePubKeyRequest.encode);
}

export function decodeNativeAddressFromNativePubKeyRequest(
  buffer: Uint8Array
): NativeAddressFromNativePubKeyRequest {
  return Protobuf.decode<NativeAddressFromNativePubKeyRequest>(
    buffer,
    NativeAddressFromNativePubKeyRequest.decode
  );
}