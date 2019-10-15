import { DeclareResolver, glue } from "joystream/query"
import { Category, Thread, CategoryList, ThreadList } from "./modules/forum"

export {
    glue,
}

// tslint:disable-next-line:no-namespace
export namespace types {
    export const CategoryId = "u32"
    export const ThreadId = "u32"
    export const Category = Category.Codec()
    export const Thread = Thread.Codec()

	// Stock JoyStream types to make the query server work
	export const ContentId = ""
	export const ContentMetadata = ""
	export const ContentMetadataUpdate = ""
	export const DataObject = ""
	export const DataObjectStorageRelationship = ""
	export const DataObjectStorageRelationshipId = ""
	export const DataObjectType = ""
	export const DataObjectTypeId = ""
	export const TypeId = ""
	export const DownloadSession = ""
	export const DownloadSessionId = ""
	export const ElectionStage = ""
	export const MemberId = ""
	export const PaidMembershipTerms = ""
	export const PaidTermId = ""
	export const Profile = ""
	export const ProposalStatus = ""
	export const Requests = ""
	export const Role = ""
	export const RoleParameters = ""
	export const RuntimeUpgradeProposal = ""
	export const SealedVote = ""
	export const Seats = ""
	export const Stake = ""
	export const TallyResult = ""
	export const TransferableStake = ""
	export const UserInfo = ""
	export const VoteKind = ""
	export const ActorId = ""
	export const ActorInRole = ""
	export const RoleId = ""
	export const IPNSIdentity = ""
	export const Url = ""
	export const Actor = ""
	export const InputValidationLengthConstraint = "u64"
	export const Post = ""
	export const PostId = "u64"

}

// tslint:disable-next-line:no-namespace
export namespace resolvers {
	export namespace Query {
		export const forumCategories = DeclareResolver<CategoryList>()
		export const forumThreads = DeclareResolver<ThreadList>()
	}
	export namespace Category {
		export const threads = DeclareResolver<ThreadList>()
	}
}
