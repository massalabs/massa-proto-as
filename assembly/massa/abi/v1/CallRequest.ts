// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class CallRequest {
  static encode(message: CallRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.targetScAddress);

    writer.uint32(18);
    writer.string(message.targetFunctionName);

    writer.uint32(26);
    writer.bytes(message.functionArg);

    const callCoins = message.callCoins;
    if (callCoins !== null) {
      writer.uint32(34);
      writer.fork();
      NativeAmount.encode(callCoins, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CallRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CallRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetScAddress = reader.string();
          break;

        case 2:
          message.targetFunctionName = reader.string();
          break;

        case 3:
          message.functionArg = reader.bytes();
          break;

        case 4:
          message.callCoins = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  targetScAddress: string;
  targetFunctionName: string;
  functionArg: Uint8Array;
  callCoins: NativeAmount | null;

  constructor(
    targetScAddress: string = "",
    targetFunctionName: string = "",
    functionArg: Uint8Array = new Uint8Array(0),
    callCoins: NativeAmount | null = null
  ) {
    this.targetScAddress = targetScAddress;
    this.targetFunctionName = targetFunctionName;
    this.functionArg = functionArg;
    this.callCoins = callCoins;
  }
}

export function encodeCallRequest(message: CallRequest): Uint8Array {
  return Protobuf.encode(message, CallRequest.encode);
}

export function decodeCallRequest(buffer: Uint8Array): CallRequest {
  return Protobuf.decode<CallRequest>(buffer, CallRequest.decode);
}
